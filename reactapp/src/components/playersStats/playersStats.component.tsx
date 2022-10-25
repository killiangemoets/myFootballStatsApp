import PlayersStatsTable from "../playersStatsTable/playersStatsTable.component";

import { PlayersStatsContainer, PlayersStatsTitle } from "./playersStats.style";

const PlayersStats = () => {
  return (
    <PlayersStatsContainer>
      <PlayersStatsTitle>Best Crossers (Total Successful)</PlayersStatsTitle>
      <PlayersStatsTable />
    </PlayersStatsContainer>
  );
};

export default PlayersStats;
