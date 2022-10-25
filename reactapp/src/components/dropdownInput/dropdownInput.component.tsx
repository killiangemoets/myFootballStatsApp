import { useEffect, useState, useRef, FC } from "react";
import { Info } from "../../store/inputValues/inputValues.type";
import Dropdown from "../dropdown/dropdown.component";
import {
  CarretDownIcon,
  InputButton,
  DropdownInputContainer,
} from "./dropdownInput.style";

type DropdownInputProps = {
  children?: JSX.Element | JSX.Element[] | string | string[] | null;
  current: Info | null;
  list: Info[];
  handler: (value: string) => void;
};

const DropdownInput: FC<DropdownInputProps> = ({
  children,
  current,
  list,
  handler,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownInput.current &&
        !dropdownInput.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownInput]);

  return (
    <DropdownInputContainer ref={dropdownInput}>
      <InputButton
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        {children}
        <p>{current?.name}</p>
        <CarretDownIcon />
      </InputButton>
      {openDropdown && (
        <Dropdown
          current={current}
          list={list}
          handler={handler}
          closeDropdown={() => {
            setOpenDropdown(false);
          }}
        />
      )}
    </DropdownInputContainer>
  );
};

export default DropdownInput;
