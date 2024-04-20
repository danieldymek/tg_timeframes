import styled from "styled-components";

const Styled = {
  ButtonSx: (isSelected?: boolean) => {
    return {
      backgroundColor: "#555A62",
      border: "0.1mm solid white",
      color: "#F4F4F4",
      padding: 1,
      width: "150px",
      borderRadius: "10px",
      ":hover": {
        bgcolor: "#6B717B",
        color: "white",
      },
    };
  },
  CustomIcon: styled("img")({
    height: "20px",
  }),
};

export default Styled;
