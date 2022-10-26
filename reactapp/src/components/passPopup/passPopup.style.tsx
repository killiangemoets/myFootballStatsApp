import styled from "styled-components";

export const PopupContainer = styled.div`
  position: absolute;
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #b0bea0;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  padding: 1.2rem 0.4rem;
  border-radius: 8px;
`;
export const CrossSuccess = styled.p`
  color: #fcfdfa;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
`;
export const FromTo = styled.p`
  color: #42473c;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Game = styled.p`
  text-align: center;
  color: #fcfdfa;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
`;
