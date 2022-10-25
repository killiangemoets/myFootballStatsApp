import ClubStats from "../clubStats/clubStats.component";
import Field from "../field/field.component";
import PlayersStats from "../playersStats/playersStats.component";
import { ResultsContainer, SideContainer } from "./results.style";

const Results = () => {
  return (
    <ResultsContainer>
      <SideContainer>
        <ClubStats />
        <PlayersStats />
      </SideContainer>
      <SideContainer>
        <Field />
      </SideContainer>
    </ResultsContainer>
  );
};

export default Results;
