import { Cross } from "../../store/crosses/crosses.type";

const retrieveSuccess = (crosses: Cross[]) => {
  const successMap = {
    unsuccessful: 0,
    successful: 0,
    "shots assists": 0,
    "goals assists": 0,
  };

  for (const cross of crosses) {
    if (cross.result === "unsuccessful") successMap.unsuccessful += 1;
    else if (cross.types.find((el) => el === "goal_assist"))
      successMap["goals assists"] += 1;
    else if (cross.types.find((el) => el === "shot_assist"))
      successMap["shots assists"] += 1;
    else successMap.successful += 1;
  }

  return successMap;
};

export default retrieveSuccess;
