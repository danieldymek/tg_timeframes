import ReactECharts from "echarts-for-react";
import { getChartOptions } from "../../../helpers/chartHelpers";

type IndexData = {
  date: string;
  value: number;
};

interface ChartProps {
  chainNameIndexValues: IndexData[];
  compareNameIndexValues: IndexData[];
  chainName: string;
  compareName: string;
  period: "1w" | "2w" | "1M";
}

const Chart = (props: ChartProps) => {
  const {
    chainName,
    compareName,
    chainNameIndexValues,
    compareNameIndexValues,
    period,
  } = props;

  if (!props) return <>chart error</>;

  const chartOptions = getChartOptions(
    chainNameIndexValues,
    compareNameIndexValues,
    chainName,
    compareName,
    period
  );

  return <ReactECharts option={chartOptions} style={{ height: 400 }} />;
};

export default Chart;
