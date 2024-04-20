import styled from "styled-components";

const Styled = {
  Container: styled("div")({
    width: "500px",
    backgroundColor: "white",
    marginTop: "20px",
    boxShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "20px",
  }),
  TimeframeItem: styled("div")({
    cursor: "pointer",
    height: "40px",
    width: "40px",
    backgroundColor: "#555A62",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#323539",
    },
    "&.selected": {
      backgroundColor: "#323539",
    },
  }),
  TimeframeLabel: styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  }),
};

export default Styled;
