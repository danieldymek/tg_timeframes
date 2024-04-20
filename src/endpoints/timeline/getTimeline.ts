import axios from "axios";

export type IndexData = {
  date: string;
  value: number;
};

export interface TimelineDataResponseType {
  blockchain: {
    tg_growth_index: IndexData[];
  };
  cumulative: {
    tg_growth_index: IndexData[];
  };
}

const getTimelineData = (chainName: string, compareName: string) => {
  const url =
    "https://api.tokenguard.io/db-api/growth-index/basic-timeline-data";
  return axios.post<TimelineDataResponseType>(url, {
    chainName,
    period: "last year",
    metric: "tg_growth_index",
    compareWith: [compareName],
  });
};

export { getTimelineData };
