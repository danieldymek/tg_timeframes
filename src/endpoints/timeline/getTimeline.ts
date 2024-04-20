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
  const url = "http://localhost:5001/basic-timeline-data";
  return axios.post<TimelineDataResponseType>(url, {
    chainName,
    compareName,
  });
};

export { getTimelineData };
