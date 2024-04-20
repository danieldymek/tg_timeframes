import styled from "styled-components";

const Styled = {
  AppContainer: styled("div")({
    height: "100vh",
    width: "calc(100vw - 230px)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  }),
  HeaderText: styled("div")({
    fontWeight: 700,
    fontSize: "40px",
    textAlign: "center",
    width: "100%",
    padding: "50px",
  }),
  OptionsSelectorWrapper: styled("div")({
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    gap: "150px",
  }),
  CryptoSelectBoxes: styled("div")({
    display: "flex",
    gap: "50px",
  }),
  Timeline: styled("div")({
    display: "flex",
    flexDirection: "column",
  }),
};

export default Styled;
