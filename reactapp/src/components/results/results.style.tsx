import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rem;

  @media screen and (max-width: 80em) {
    gap: 2rem;
  }

  @media screen and (max-width: 68em) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 61em) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 80em) {
    gap: 2rem;
  }
`;
