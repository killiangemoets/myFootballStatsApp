import styled from "styled-components";

type PassContainerProps = {
  topLength: number;
  rightLength: number;
  widthLength: number;
  rotation: number;
  xTranslation: number;
  yTranslation: number;
  endingPointPosition: string;
};

export const PassContainer = styled.div<PassContainerProps>`
  position: absolute;
  height: 0.2rem;

  top: ${({ topLength }) => `${topLength}px`};
  right: ${({ rightLength }) => `${rightLength}px`};

  width: ${({ widthLength }) => `${widthLength}px`};

  rotate: ${({ rotation }) => `calc(${-rotation}deg)`};

  transform: ${({ xTranslation, yTranslation }) =>
    `translateX(${-xTranslation}px) translateY(${yTranslation}px)`};

  background-color: #b0bea0;
  display: flex;
  align-items: center;
  justify-content: ${({ endingPointPosition }) => endingPointPosition};
  cursor: pointer;
`;
type EndingPointProps = {
  successful: boolean;
};

export const EndingPoint = styled.div<EndingPointProps>`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background-color: ${({ successful }) => (successful ? "#b0bea0" : "#6e7764")};
  border: 2px solid #b0bea0;
`;
