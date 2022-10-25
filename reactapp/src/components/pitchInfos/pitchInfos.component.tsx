import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPlayer } from "../../store/inputValues/inputValues.action";
import { Info } from "../../store/inputValues/inputValues.type";

import { AppDispatch } from "../../store/store";
import Picture from "../picture/picture.component";
import {
  PitchInfosContainer,
  Formation,
  Direction,
  Span,
  ClubLogo,
  ResetLogo,
  Button,
} from "./pitchInfos.style";

type PitchInfosProps = {
  team: string | undefined;
  player: Info | null;
  formation: string | undefined;
  direction: string | undefined;
};

const PitchInfos: FC<PitchInfosProps> = ({
  team,
  player,
  formation,
  direction,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPlayer(null));
  };

  return (
    <PitchInfosContainer>
      {team && (
        <ClubLogo
          imageUrl={`https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/teams/${team}.png`}
        />
      )}
      {player && (
        <>
          <Button onClick={() => handleClick()}>
            <ResetLogo />
          </Button>
          <Picture playerId={`${player.value}`} playerName={player.name} />
        </>
      )}
      <Span>&#8212;</Span>
      <Formation>{formation}</Formation>
      <Span>&#8212;</Span>
      <Direction>{direction}</Direction>
    </PitchInfosContainer>
  );
};

export default PitchInfos;
