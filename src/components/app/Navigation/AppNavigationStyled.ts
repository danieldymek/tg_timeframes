import styled from "styled-components";
import logo from "../../../assets/logos/tokenify_logo.png";
const Styled = {
  Container: styled("div")({
    height: "100vh",
    width: "230px",
    backgroundColor: "#2B2D31",
    position: "absolute",
    right: 0,
    borderRadius: "15px 0 0 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  LogoContainer: styled("div")({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: "20px",
    height: "75px",
  }),
  Logo: styled("div")({
    backgroundImage: `url(${logo})`,
    backgroundSize: "47px 47px",
    width: "47px",
    height: "47px",
    marginRight: "20px",
  }),
  LogoText: styled("div")({
    fontWeight: 400,
    fontSize: "15px",
    letterSpacing: "10px",
    color: "white",
    alignSelf: "center",
  }),
  ButtonsWrapper: styled("div")({
    backgroundColor: "#313338",
    height: "calc(100vh - 50px)",
    marginBottom: "25px",
    width: "200px",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& :first-child": {
      marginTop: "20px",
      width: "170px",
      "& img": {
        margin: "0px",
        width: "50px",
        height: "35px",
        position: "absolute",
        bottom: 0,
      },
    },
  }),
};

export default Styled;
