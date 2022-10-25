import { Cross } from "../../store/crosses/crosses.type";

export type Crosser = {
  earlySuccessful: number;
  earlyTotal: number;
  midSuccessful: number;
  midTotal: number;
  lateSuccessful: number;
  lateTotal: number;
  crossesSuccessful: number;
  crossesTotal: number;
  name: string;
  id: number;
};

const retrieve3BestCrossers = (crosses: Cross[]) => {
  const crossers: Crosser[] = [];

  for (const cross of crosses) {
    let currentCrosser = crossers.find(
      (crosser) => crosser.id === cross.player._id
    );

    if (!currentCrosser) {
      currentCrosser = {
        earlySuccessful: 0,
        earlyTotal: 0,
        midSuccessful: 0,
        midTotal: 0,
        lateSuccessful: 0,
        lateTotal: 0,
        crossesSuccessful: 0,
        crossesTotal: 0,
        name: cross.player.name,
        id: cross.player._id,
      };
      crossers.push(currentCrosser);
    }

    if (cross.start_coordinate_y <= 70) {
      currentCrosser.earlyTotal += 1;
      currentCrosser.crossesTotal += 1;
      if (cross.result === "successful") {
        currentCrosser.earlySuccessful += 1;
        currentCrosser.crossesSuccessful += 1;
      }
    } else if (cross.start_coordinate_y < 90) {
      currentCrosser.midTotal += 1;
      currentCrosser.crossesTotal += 1;
      if (cross.result === "successful") {
        currentCrosser.midSuccessful += 1;
        currentCrosser.crossesSuccessful += 1;
      }
    } else {
      currentCrosser.lateTotal += 1;
      currentCrosser.crossesTotal += 1;
      if (cross.result === "successful") {
        currentCrosser.lateSuccessful += 1;
        currentCrosser.crossesSuccessful += 1;
      }
    }
  }

  crossers.sort((a, b) => b.crossesSuccessful - a.crossesSuccessful);

  return crossers.slice(0, 3);
};

export default retrieve3BestCrossers;
