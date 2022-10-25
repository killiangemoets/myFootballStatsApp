import styled from "styled-components";
import { ReactComponent as ResetSVG } from "../../assets/refresh-outline.svg";

export const PitchInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 8.6rem;
  width: 43.2rem;

  @media screen and (max-width: 39em) {
    gap: 1rem;
    height: 6.4rem;
    width: 34rem;
  }
`;

export const Formation = styled.p`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;

  @media screen and (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

export const Direction = styled.p`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;

  @media screen and (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;

  @media screen and (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

type ClubLogoProps = {
  imageUrl: string;
};

export const ClubLogo = styled.div<ClubLogoProps>`
  width: 4.8rem;
  height: 4.8rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 39em) {
    width: 4rem;
    height: 4rem;
  }
`;

export const ResetLogo = styled(ResetSVG)`
  width: 2.8rem;
  transition: all 0.3s;

  &:hover {
    width: 3rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0 !important;
  width: 3rem;

  transition: all 0.3s;
  background-color: #b0bea0;
`;
