import { Info } from "../../store/inputValues/inputValues.type";

const getFormations = async (teamId: string): Promise<Info[]> => {
  try {
    const rawResponse = await fetch(
      `https://myfootballstatsapp-production.up.railway.app/general-infos/formations?team=${teamId}`
    );
    const response = await rawResponse.json();
    const formations = response.data.formations.map((formation: string) => {
      return { value: formation, name: formation };
    });
    return formations;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getFormations;
