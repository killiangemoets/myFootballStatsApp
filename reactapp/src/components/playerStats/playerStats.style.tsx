import styled from "styled-components";

export const PlayerStatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  padding: 1rem 0rem;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #848e78;
    color: #fff;
  }

  @media screen and (max-width: 80em) {
    gap: 0rem;
  }
`;

export const PlayerStatsElement = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 68em) {
    width: 10rem;
  }
  @media screen and (max-width: 39em) {
    width: 7rem;
  }
`;

export const CrossesStats = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 39em) {
    font-size: 1.8rem;
  }
`;

export const CrossesPercentage = styled.span`
  font-size: 1.8rem;

  @media screen and (max-width: 39em) {
    font-size: 1.6rem;
  }
`;
