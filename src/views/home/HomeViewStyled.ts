import styled from "styled-components";
import laptop from "../../assets/elements/laptop.png";

const Styled = {
  HeaderText: styled("h1")({
    padding: "60px",
  }),
  Container: styled("div")({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  Laptop: styled("div")({
    backgroundImage: `url(${laptop})`,
    backgroundSize: "contain",
    width: "1000px",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }),
};

export default Styled;
