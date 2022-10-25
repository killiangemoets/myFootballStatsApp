import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #b0bea0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  @media screen and (max-width: 80em) {
    padding: 2.8rem;
    gap: 2.8rem;
  }
`;
