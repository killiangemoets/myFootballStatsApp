import styled from "styled-components";

import { ReactComponent as CarretDownSVG } from "../../assets/caret-down-outline.svg";
export const DropdownInputContainer = styled.div`
  position: relative;
  width: 27rem;
`;

export const InputButton = styled.button`
  width: 27rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0 !important;

  padding: 0 1.6rem;
  height: 4.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 8px;

  transition: all 0.3s;
  background-color: #848e78;
  color: #fff;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

  &:hover,
  &:visited {
    background-color: #6e7764;
  }
`;

export const CarretDownIcon = styled(CarretDownSVG)`
  width: 2rem;
`;
