import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Styled from "./SelectStyled";

type SelectItem = {
  name: string;
  icon: string;
  id?: string;
};

interface SelectProps {
  selectItems?: SelectItem[];
  onValueChange?: (value: string) => void;
  disableByItemName?: string;
  defaultValue?: string;
  label: string;
  disabled?: boolean;
}

const Select = (props: SelectProps) => {
  const {
    selectItems,
    onValueChange,
    disableByItemName,
    defaultValue,
    label,
    disabled,
  } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <TextField
        select
        label={label}
        sx={Styled.Select}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
      >
        {selectItems?.map(({ name, icon, id }, index) => {
          if (disableByItemName === id) return 0;
          return (
            <MenuItem
              key={index}
              value={id}
              onClick={() => onValueChange && onValueChange(name)}
            >
              <Styled.Icon src={icon} alt={name} />
              {icon && name}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
};

export default Select;
