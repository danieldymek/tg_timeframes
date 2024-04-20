import styled from "styled-components";
import logo from "../../../assets/logos/tokenify_logo.png";
const Styled = {
  Container: styled("div")({
    width: "100vw",
    height: "100px",
    borderRadius: "0px 0px 15px 15px",
    backgroundColor: "white",
    filter: "drop-shadow(0px 0.1mm 0.5mm black)",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  }),
  Logo: styled("div")({
    backgroundImage: `url(${logo})`,
    backgroundSize: "75px 75px",
    width: "75px",
    height: "75px",
    marginRight: "20px",
  }),
  LogoText: styled("div")({
    fontWeight: 300,
    fontSize: "40px",
    letterSpacing: "10px",
  }),
};

export default Styled;
