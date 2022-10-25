import styled from "styled-components";

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 61em) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  @media screen and (max-width: 39em) {
    display: flex;
    flex-direction: column;
  }
`;

export const CenterInputInGrid1 = styled.div`
  @media screen and (max-width: 61em) {
    grid-column: 1/3;
  }
`;
export const CenterInputInGrid2 = styled.div`
  @media screen and (max-width: 61em) {
    grid-column: 3/5;
  }
`;
export const CenterInputInGrid3 = styled.div`
  @media screen and (max-width: 61em) {
    grid-column: 2/4;
  }
`;

type InputImgProps = {
  imageUrl: string;
};

export const InputImg = styled.div<InputImgProps>`
  width: 3rem;
  height: 3rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
