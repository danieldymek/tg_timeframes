import comparator_icon from "../../../assets/icons/comparator_icon.svg";
import Button from "../../button/Button";
import Styled from "./AppNavigationStyled";

const AppNavigation = () => {
  return (
    <>
      <Styled.Container>
        <Styled.LogoContainer>
          <Styled.Logo />
          <Styled.LogoText>TOKENIFY</Styled.LogoText>
        </Styled.LogoContainer>
        <Styled.ButtonsWrapper>
          <Button text="Comparator" isIconCustom icon={comparator_icon} />
        </Styled.ButtonsWrapper>
      </Styled.Container>
    </>
  );
};

export default AppNavigation;
