import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 33.6rem;

  @media screen and (max-width: 80em) {
    gap: 1rem;
  }
`;

export const TableLabels = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 80em) {
    gap: 0rem;
  }
`;

export const TableLabel = styled.div`
  width: 12rem;

  @media screen and (max-width: 68em) {
    width: 10rem;
  }

  @media screen and (max-width: 39em) {
    width: 7rem;
  }
`;

export const TableLabelText = styled.h3`
  font-size: 1.8rem;
  letter-spacing: 1.4px;
  color: #e7f2d9;
  text-align: center;

  @media screen and (max-width: 39em) {
    font-size: 1.6rem;
  }
`;

export const NoResult = styled.p`
  margin-top: 6rem;
  color: #333;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
`;
