import { FieldContainer, Pitch, PitchContainer } from "./field.style";
import PitchInfos from "../pitchInfos/pitchInfos.component";
import Pass from "../pass/pass.component";

import { useSelector } from "react-redux";
import {
  selectCrosses,
  selectCrossesIsLoading,
} from "../../store/crosses/crosses.selector";
import { selectInputValues } from "../../store/inputValues/inputValues.selector";
import useWindowSize from "../../hooks/check-screen-size";
import Spinner from "../spinner/spinner.component";

const Field = () => {
  const crosses = useSelector(selectCrosses);
  const isLoading = useSelector(selectCrossesIsLoading);

  const { team, formation, direction, player } = useSelector(selectInputValues);

  const [viewportWidth] = useWindowSize();

  let heightField = viewportWidth > 624 ? 578 : 578 * 0.8;
  let widthField = viewportWidth > 624 ? 398 : 398 * 0.8;

  return (
    <FieldContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PitchContainer>
            <Pitch />
            {crosses
              .filter((cross) => {
                if (player) return cross.player._id === +player.value;
                else return true;
              })
              .map((cross, i) => {
                return (
                  <Pass
                    key={i}
                    pass={cross}
                    heightField={heightField}
                    widthField={widthField}
                  />
                );
              })}
          </PitchContainer>
          <PitchInfos
            team={!player ? team?.value : undefined}
            player={player}
            formation={formation?.name}
            direction={direction?.name}
          />
        </>
      )}
    </FieldContainer>
  );
};

export default Field;
