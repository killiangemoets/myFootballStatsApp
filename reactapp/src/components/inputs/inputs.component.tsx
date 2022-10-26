import { useEffect, useState } from "react";
import getFormations from "../../utils/api/formations.utils";
import getTeams from "../../utils/api/teams.utils";
import DropdownInput from "../dropdownInput/dropdownInput.component";
import {
  CenterInputInGrid1,
  CenterInputInGrid2,
  CenterInputInGrid3,
  InputImg,
  InputsContainer,
} from "./inputs.style";

import { useSelector, useDispatch } from "react-redux";

import { selectInputValues } from "../../store/inputValues/inputValues.selector";
import {
  setCurrentTeam,
  setCurrentFormation,
  setCurrentDirection,
} from "../../store/inputValues/inputValues.action";
import { fetchCrossesAsync } from "../../store/crosses/crosses.action";
import { Info } from "../../store/inputValues/inputValues.type";
import { AppDispatch } from "../../store/store";

const Inputs = () => {
  const allFormations = { value: "all", name: "All formations" };
  const [teams, setTeams] = useState<Info[]>([]);
  const [formations, setFormations] = useState<Info[]>([allFormations]);
  const directions = [
    { value: "left", name: "Left Crosses" },
    { value: "right", name: "Right Crosses" },
  ] as Info[];

  const {
    team: currentTeam,
    formation: currentFormation,
    direction: currentDirection,
  } = useSelector(selectInputValues);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const updateTeams = async () => {
      const teamsList = await getTeams();
      setTeams(teamsList);
      currentTeam || dispatch(setCurrentTeam(teamsList[0]));
    };
    updateTeams();

    currentDirection || dispatch(setCurrentDirection(directions[0]));
  }, []);

  useEffect(() => {
    const updateFormations = async (team: Info) => {
      const formationsList = await getFormations(team.value);
      setFormations([allFormations, ...formationsList]);
      dispatch(setCurrentFormation(allFormations));
    };
    if (currentTeam?.value) updateFormations(currentTeam);
  }, [currentTeam, dispatch]);

  useEffect(() => {
    if (
      !currentTeam?.value ||
      !currentFormation?.value ||
      !currentDirection?.value
    )
      return;

    dispatch(
      fetchCrossesAsync(
        currentTeam.value,
        currentFormation.value,
        currentDirection.value
      )
    );
  }, [currentFormation, currentDirection, dispatch]);
  // }, [currentTeam, currentFormation, currentDirection, dispatch]);

  const handleTeam = (value: string) => {
    const foundTeam = teams.find((team: Info) => team.value === value);
    if (foundTeam) dispatch(setCurrentTeam(foundTeam));
  };
  const handleFormation = (value: String) => {
    const foundFormation = formations.find(
      (formation) => formation.value === value
    );
    if (foundFormation) dispatch(setCurrentFormation(foundFormation));
  };
  const handleDirection = (value: String) => {
    const foundDirection = directions.find(
      (direction) => direction.value === value
    );
    if (foundDirection) dispatch(setCurrentDirection(foundDirection));
  };

  return (
    <InputsContainer>
      <CenterInputInGrid1>
        <DropdownInput current={currentTeam} list={teams} handler={handleTeam}>
          <InputImg
            imageUrl={`https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/teams/${currentTeam?.value}.png`}
          />
        </DropdownInput>
      </CenterInputInGrid1>
      <CenterInputInGrid2>
        <DropdownInput
          current={currentFormation}
          list={formations}
          handler={handleFormation}
        ></DropdownInput>
      </CenterInputInGrid2>
      <CenterInputInGrid3>
        <DropdownInput
          current={currentDirection}
          list={directions}
          handler={handleDirection}
        />
      </CenterInputInGrid3>
    </InputsContainer>
  );
};

export default Inputs;
