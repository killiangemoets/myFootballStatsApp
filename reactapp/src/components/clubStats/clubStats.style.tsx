import styled from "styled-components";

export const ClubStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 26rem;

  @media screen and (max-width: 68em) {
    gap: 0.2rem;
  }

  @media screen and (max-width: 39em) {
    flex-direction: column;
    height: 52.2rem;
  }
`;

export const NoResult = styled.p`
  color: #333;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
`;
