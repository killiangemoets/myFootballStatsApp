import { FC } from "react";
import { Info } from "../../store/inputValues/inputValues.type";
import { DropdownContainer, Option } from "./dropdown.style";

type DropdownProps = {
  current: Info | null;
  list: Info[];
  handler: (value: string) => void;
  closeDropdown: () => void;
};

const Dropdown: FC<DropdownProps> = ({
  current,
  list,
  handler,
  closeDropdown,
}) => {
  return (
    <DropdownContainer>
      {list.map((el) => {
        return (
          <Option
            current={el.value === current?.value ? true : false}
            key={el.value}
            onClick={() => {
              handler(el.value);
              closeDropdown();
            }}
          >
            <p>{el.name}</p>
          </Option>
        );
      })}
    </DropdownContainer>
  );
};

export default Dropdown;
