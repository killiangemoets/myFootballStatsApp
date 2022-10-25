import DonutDiagram from "../donutDiagram/donutDiagram.component";
import PieDiagram from "../pieDiagram/pieDiagram.component";
import { ClubStatsContainer, NoResult } from "./clubStats.style";

import { useSelector } from "react-redux";
import {
  selectCrosses,
  selectCrossesIsLoading,
} from "../../store/crosses/crosses.selector";
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner.component";
import retrieveEarlyMidLate from "../../utils/dataProcessing/retrieveEarlyMidLate";
import retrieveSuccess from "../../utils/dataProcessing/retrieveSuccess";

const ClubStats = () => {
  const crosses = useSelector(selectCrosses);
  const isLoading = useSelector(selectCrossesIsLoading);
  const [earlyMidLateMap, setEarlyMidLateMap] = useState({});
  const [successMap, setSuccessMap] = useState({});

  useEffect(() => {
    setEarlyMidLateMap(retrieveEarlyMidLate(crosses));
    setSuccessMap(retrieveSuccess(crosses));
  }, [crosses]);

  return (
    <ClubStatsContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Boolean(crosses.length) ? (
            <>
              <DonutDiagram data={earlyMidLateMap} />
              <PieDiagram data={successMap} />
            </>
          ) : (
            <NoResult>No Result</NoResult>
          )}
        </>
      )}
    </ClubStatsContainer>
  );
};

export default ClubStats;
