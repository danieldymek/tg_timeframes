import MuiButton, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";
import Styled from "./ButtonStyled";

interface CustomButtonProps extends ButtonProps {
  icon?: string | ReactNode;
  text?: string;
  isIconCustom?: boolean;
  selected?: boolean;
}

const Button = (props: CustomButtonProps) => {
  const { icon, text, onClick, isIconCustom } = props;
  let IconImg = icon;
  if (isIconCustom) {
    IconImg = <Styled.CustomIcon alt="custom_icon" src={icon as string} />;
  }
  if (!text) return <></>;
  return (
    <MuiButton
      sx={Styled.ButtonSx(true)}
      disableRipple
      startIcon={IconImg}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
