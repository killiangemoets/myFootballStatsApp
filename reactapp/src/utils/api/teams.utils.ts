import { Info } from "../../store/inputValues/inputValues.type";

export type Team = {
  _id: number;
  name: string;
  wyscout_name: string;
  competition_id: number;
  league: string;
  image: string;
};

const getTeams = async (): Promise<Info[]> => {
  try {
    const rawResponse = await fetch(
      "https://myfootballstatsapp-production.up.railway.app/general-infos/teams"
    );
    const response = await rawResponse.json();
    const teams = response.data.teams.map((team: Team) => {
      return { name: team.name, value: `${team._id}` };
    });

    return teams;
  } catch (err) {
    console.error(err as Error);
    return [];
  }
};

export default getTeams;
