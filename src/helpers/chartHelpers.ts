import moment from "moment";

type IndexData = {
  date: string;
  value: number;
};

export const getChartOptions = (
  chainNameIndexValues: IndexData[],
  compareNameIndexValues: IndexData[],
  chainName: string,
  compareName: string,
  period: "1w" | "2w" | "1M"
) => {
  const getSeries = () => {
    let series = [];
    if (chainName) {
      const processedChainNameIndexValues = chainNameIndexValues.map(
        (values) => {
          return [values.date, values.value];
        }
      );
      const chainNamePeriodValues = {
        "1w": processedChainNameIndexValues,
        "2w": processedChainNameIndexValues.filter(
          (item, index) => index % 2 === 1
        ),
        "1M": processedChainNameIndexValues.filter(
          (item, index) => index % 4 === 1
        ),
      };

      series.push({
        name: chainName,
        type: "line",
        data: chainNamePeriodValues[period],
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        smooth: true,
      });
    }
    if (compareName) {
      const processedCompareNameIndexValues = compareNameIndexValues?.map(
        (values) => {
          return [values.date, values.value];
        }
      );
      const compareNamePeriodValues = {
        "1w": processedCompareNameIndexValues,
        "2w": processedCompareNameIndexValues?.filter(
          (item, index) => index % 2 === 1
        ),
        "1M": processedCompareNameIndexValues?.filter(
          (item, index) => index % 4 === 1
        ),
      };

      series.push({
        name: compareName,
        type: "line",
        data: compareNamePeriodValues[period],
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        smooth: true,
      });
    }
    return series;
  };

  return {
    title: {
      text: "Growth Index",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [chainName, compareName],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "time",
        boundaryGap: false,
        axisLabel: {
          formatter: function (value: string) {
            return moment(value).format("YYYY-MM-DD");
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: getSeries(),
  };
};
