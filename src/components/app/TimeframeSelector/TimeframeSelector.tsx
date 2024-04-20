import { useState } from "react";
import Styled from "./TimeframeSelectorStyled";

const timeframeItems = [{ name: "1w" }, { name: "2w" }, { name: "1M" }];

interface TimeframeSelectorProps {
  onChange: (value: "1w" | "2w" | "1M") => void;
}

const TimeframeSelector = (props: TimeframeSelectorProps) => {
  const { onChange } = props;

  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "1w" | "2w" | "1M"
  >("1w");

  const handleSetSelectedTimeframe = (name: "1w" | "2w" | "1M") => {
    onChange(name);
    setSelectedTimeframe(name);
  };

  return (
    <Styled.Container>
      <Styled.TimeframeLabel>Timeframe</Styled.TimeframeLabel>
      {timeframeItems.map(({ name }) => (
        <Styled.TimeframeItem
          className={selectedTimeframe === name ? "selected" : ""}
          onClick={() => handleSetSelectedTimeframe(name as "1w" | "2w" | "1M")}
          key={name}
        >
          {name}
        </Styled.TimeframeItem>
      ))}
    </Styled.Container>
  );
};

export default TimeframeSelector;
