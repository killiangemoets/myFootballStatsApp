import PlayerStats from "../playerStats/playerStats.component";
import {
  NoResult,
  TableContainer,
  TableLabel,
  TableLabels,
  TableLabelText,
} from "./playersStatsTable.style";

import { useSelector } from "react-redux";
import {
  selectCrosses,
  selectCrossesIsLoading,
} from "../../store/crosses/crosses.selector";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner.component";
import retrieve3BestCrossers, {
  Crosser,
} from "../../utils/dataProcessing/retrieve3BestCrosses";

const PlayersStatsTable = () => {
  const crosses = useSelector(selectCrosses);
  const isLoading = useSelector(selectCrossesIsLoading);
  const [bestCrossers, setBestCrossers] = useState([] as Crosser[]);

  useEffect(() => {
    setBestCrossers(retrieve3BestCrossers(crosses));
  }, [crosses]);

  return (
    <TableContainer>
      <TableLabels>
        <TableLabel></TableLabel>
        <TableLabel>
          <TableLabelText>Crosses</TableLabelText>
        </TableLabel>
        <TableLabel>
          <TableLabelText>Early</TableLabelText>
        </TableLabel>
        <TableLabel>
          <TableLabelText>Mid</TableLabelText>
        </TableLabel>
        <TableLabel>
          <TableLabelText>Late</TableLabelText>
        </TableLabel>
      </TableLabels>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Boolean(crosses.length) ? (
            bestCrossers.map((crosser, i) => {
              return <PlayerStats key={i} stats={crosser} />;
            })
          ) : (
            <NoResult>No Result</NoResult>
          )}
        </>
      )}
    </TableContainer>
  );
};

export default PlayersStatsTable;
