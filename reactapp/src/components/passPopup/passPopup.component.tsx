import { FC } from "react";
import { Cross } from "../../store/crosses/crosses.type";
import niceDate from "../../utils/formatting/niceDate";
import niceName from "../../utils/formatting/niceName";
import {
  CrossSuccess,
  FromTo,
  Game,
  PopupContainer,
  GameContainer,
} from "./passPopup.style";

type PassPopupProps = {
  pass: Cross;
};

const PassPopup: FC<PassPopupProps> = ({ pass }) => {
  let success;
  if (pass.result === "unsuccessful") success = "Unsuccessful Cross";
  else if (pass.types.find((el) => el === "goal_assist"))
    success = "Goal Assist";
  else if (pass.types.find((el) => el === "shot_assist"))
    success = "Shot Assist";
  else success = "Successful Cross";

  return (
    <PopupContainer>
      <CrossSuccess>{success}</CrossSuccess>
      <FromTo>
        From {niceName(pass.player.name)}
        {pass.receiver.name ? ` to ${niceName(pass.receiver.name)}` : ""}
      </FromTo>
      <GameContainer>
        <Game>Against {pass.opponent_team.name}</Game>
        <Game>
          ({niceDate(pass.match.date)} - Game {pass.match.id})
        </Game>
      </GameContainer>
    </PopupContainer>
  );
};

export default PassPopup;
