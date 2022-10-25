import styled from "styled-components";

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  @media screen and (max-width: 80em) {
    gap: 0.2rem;
  }
`;

type ImgProps = {
  imageUrl: string;
};
export const Img = styled.div<ImgProps>`
  background-color: #6e7764;
  padding: 0rem;
  border-radius: 50%;
  border: 3px solid #e7f2d9;
  width: 5.8rem;
  height: 5.8rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 80em) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 39em) {
    width: 4rem;
    height: 4rem;
    border: 2px solid #e7f2d9;
  }
`;

export const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-align: center;
  width: 8rem;

  @media screen and (max-width: 80em) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 39em) {
    font-size: 1rem;
  }
`;
