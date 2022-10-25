import styled from "styled-components";
import { ReactComponent as PitchSVG } from "../../assets/pitch.svg";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 43.2rem;
  @media screen and (max-width: 39em) {
    width: 34rem;
  }
`;
export const PitchContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 58rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 39em) {
    width: 32rem;
    height: 46.4rem;
  }
`;

export const Pitch = styled(PitchSVG)`
  width: 40rem;
  height: 58rem;

  @media screen and (max-width: 39em) {
    width: 32rem;
    height: 46.4rem;
  }
`;
