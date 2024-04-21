import AppNavigation from "../../components/app/Navigation/AppNavigation";
import Select from "../../components/select/Select";
import Styled from "./AppViewStyled";

import { useState } from "react";
import Chart from "../../components/app/Chart/Chart";
import TimeframeSelector from "../../components/app/TimeframeSelector/TimeframeSelector";
import { selectConstants } from "../../helpers/selectConstants";
import useTimelineData from "../../hooks/useTimelineData";

const {
  cryptoIcons: {
    NEAR,
    Arbitrum,
    Fantom,
    Optimism,
    BSC,
    Polygon,
    Ethereum,
    AlephZero,
    Avalanche,
    Solana,
  },
} = selectConstants;

const cryptoItems = [
  { name: "NEAR", icon: NEAR, id: "near" },
  { name: "Arbitrum", icon: Arbitrum, id: "arbitrum" },
  { name: "Fantom", icon: Fantom, id: "fantom" },
  { name: "Optimism", icon: Optimism, id: "optimism" },
  { name: "BSC", icon: BSC, id: "bsc" },
  { name: "Polygon", icon: Polygon, id: "polygon" },
  { name: "Ethereum", icon: Ethereum, id: "ethereum" },
  { name: "Solana", icon: Solana, id: "solana" },
  { name: "Aleph Zero", icon: AlephZero, id: "aleph-zero" },
  { name: "Avalanche", icon: Avalanche, id: "avalanche" },
];

const AppView = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState("Solana");
  const [selectedCompareBlockchain, setSelectedCompareBlockchain] =
    useState("");
  const [period, setPeriod] = useState<"1w" | "2w" | "1M">("1w");

  const timelineData = useTimelineData(
    selectedBlockchain.toLowerCase().toLowerCase().replace(" ", "-"),
    selectedCompareBlockchain.toLowerCase().replace(" ", "-")
  );

  const { chainNameIndexValues, compareNameIndexValues } = timelineData;

  const handleChangeSelectedBlockchain = (value: string) =>
    setSelectedBlockchain(value);

  const handleChangeSelectedCompareBlockchain = (value: string) =>
    setSelectedCompareBlockchain(value);

  const handleChangePeriod = (value: "1w" | "2w" | "1M") => setPeriod(value);

  return (
    <Styled.AppContainer>
      <AppNavigation />
      <div>
        <Styled.HeaderText>The Comparator</Styled.HeaderText>
        <Styled.OptionsSelectorWrapper>
          <Styled.CryptoSelectBoxes>
            <Select
              selectItems={cryptoItems}
              onValueChange={handleChangeSelectedBlockchain}
              label="Main Blockchain"
              defaultValue="solana"
              disableByItemName={selectedCompareBlockchain
                .toLowerCase()
                .replace(" ", "-")}
            />
            <Select
              selectItems={cryptoItems}
              disableByItemName={selectedBlockchain
                .toLowerCase()
                .replace(" ", "-")}
              onValueChange={handleChangeSelectedCompareBlockchain}
              label="Compare Blockchain"
            />
          </Styled.CryptoSelectBoxes>
        </Styled.OptionsSelectorWrapper>
      </div>
      <Styled.Timeline>
        <TimeframeSelector onChange={handleChangePeriod} />
        <Chart
          chainName={selectedBlockchain}
          compareName={selectedCompareBlockchain}
          chainNameIndexValues={chainNameIndexValues}
          compareNameIndexValues={compareNameIndexValues}
          period={period}
        />
      </Styled.Timeline>
    </Styled.AppContainer>
  );
};

export default AppView;
