import styled from "styled-components";

export const PlayersStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const PlayersStatsTitle = styled.h2`
  font-size: 2.6rem;
  color: #585f50;
  font-weight: 900;
  letter-spacing: 1px;

  @media screen and (max-width: 39em) {
    font-size: 2.2rem;
  }
`;
