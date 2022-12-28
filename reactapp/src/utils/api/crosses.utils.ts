import { Cross } from "../../store/crosses/crosses.type";

const getCrosses = async (
  teamId: string,
  formation: string,
  direction: string
): Promise<Cross[]> => {
  try {
    const rawResponse = await fetch(
      `https://my-football-stats-backend.onrender.com/stats/crosses?team=${teamId}&formation=${formation}&direction=${direction}`
    );
    const response = await rawResponse.json();
    return response.data.crosses;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getCrosses;
