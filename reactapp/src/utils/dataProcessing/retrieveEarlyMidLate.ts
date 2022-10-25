import { Cross } from "../../store/crosses/crosses.type";

const retrieveEarlyMidLate = (crosses: Cross[]) => {
  const earlyMidLateMap = {
    early: 0,
    mid: 0,
    late: 0,
  };

  for (const cross of crosses) {
    if (cross.start_coordinate_y <= 70) earlyMidLateMap.early += 1;
    else if (cross.start_coordinate_y < 90) earlyMidLateMap.mid += 1;
    else earlyMidLateMap.late += 1;
  }

  return earlyMidLateMap;
};

export default retrieveEarlyMidLate;
