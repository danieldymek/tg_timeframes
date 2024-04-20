import Button from "../../components/button/Button";
import HomeNavigation from "../../components/home/Navigation/HomeNavigation";
import useRoute from "../../hooks/useRoute";
import Styled from "./HomeViewStyled";

const HomeView = () => {
  const routeToApp = useRoute("app");
  return (
    <Styled.Container>
      <HomeNavigation />
      <Styled.HeaderText>
        Take a deep dive into crypto statistics
      </Styled.HeaderText>
      <Styled.Laptop />
      <Button text="Try it out!" onClick={routeToApp} />
    </Styled.Container>
  );
};

export default HomeView;
