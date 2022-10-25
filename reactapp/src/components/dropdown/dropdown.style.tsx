import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 104%;
  width: 100%;
  background-color: #b0bea0;
  background-color: #e7f2d9;
  border-radius: 8px;
  max-height: 32rem;
  overflow-y: scroll;

  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 0.6rem 0;
`;

type OptionProps = {
  current: boolean;
};

export const Option = styled.li<OptionProps>`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  text-decoration: none;
  cursor: pointer;

  padding: 0 1.6rem;
  height: 4.4rem;
  font-size: 1.6rem;
  font-weight: 600;

  transition: all 0.3s;
  background-color: ${({ current }) => (current ? "#848e78" : "none")};
  color: ${({ current }) => (current ? "#fff" : "#333")};

  &:hover,
  &:visited {
    background-color: #848e78;
    color: #fff;
  }
`;
