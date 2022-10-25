import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPlayer } from "../../store/inputValues/inputValues.action";
import { AppDispatch } from "../../store/store";
import { Crosser } from "../../utils/dataProcessing/retrieve3BestCrosses";
import Picture from "../picture/picture.component";
import {
  PlayerStatsContainer,
  PlayerStatsElement,
  CrossesStats,
  CrossesPercentage,
} from "./playerStats.style";

type PlayerStatsProps = {
  stats: Crosser;
};

const PlayerStats: FC<PlayerStatsProps> = ({ stats }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (playerId: number, playerName: string) => {
    dispatch(setCurrentPlayer({ value: `${playerId}`, name: playerName }));
  };

  return (
    <PlayerStatsContainer
      onClick={() => {
        handleClick(stats.id, stats.name);
      }}
    >
      <PlayerStatsElement>
        <Picture playerId={`${stats.id}`} playerName={stats.name} />
      </PlayerStatsElement>
      <PlayerStatsElement>
        <CrossesStats>
          {stats.crossesSuccessful}
          <CrossesPercentage>
            {stats.crossesTotal
              ? `(${Math.trunc(
                  (stats.crossesSuccessful / stats.crossesTotal) * 100
                )}%)`
              : ""}
          </CrossesPercentage>
        </CrossesStats>
      </PlayerStatsElement>
      <PlayerStatsElement>
        <CrossesStats>
          {stats.earlySuccessful}
          <CrossesPercentage>
            {stats.earlyTotal
              ? `(${Math.trunc(
                  (stats.earlySuccessful / stats.earlyTotal) * 100
                )}%)`
              : "%%%%%%%%%"}
            <div>Hellooo</div>
          </CrossesPercentage>
        </CrossesStats>
      </PlayerStatsElement>
      <PlayerStatsElement>
        <CrossesStats>
          {stats.midSuccessful}
          <CrossesPercentage>
            {stats.midTotal
              ? `(${Math.trunc((stats.midSuccessful / stats.midTotal) * 100)}%)`
              : ""}
          </CrossesPercentage>
        </CrossesStats>
      </PlayerStatsElement>
      <PlayerStatsElement>
        <CrossesStats>
          {stats.lateSuccessful}
          <CrossesPercentage>
            (
            {stats.lateTotal
              ? `${Math.trunc((stats.lateSuccessful / stats.lateTotal) * 100)}%`
              : ""}
            )
          </CrossesPercentage>
        </CrossesStats>
      </PlayerStatsElement>
    </PlayerStatsContainer>
  );
};

export default PlayerStats;
