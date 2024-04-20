import axios from "axios";
import { toast } from "react-toastify";

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
  const url = "https://tokenguard-api.onrender.com/basic-timeline-data";
  const response = axios
    .post<TimelineDataResponseType>(url, {
      chainName,
      compareName,
    })
    .catch((error) => {
      toast(error);
    });
  return response;
};

export { getTimelineData };
