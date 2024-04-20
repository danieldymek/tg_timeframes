import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTimelineData } from "../endpoints/timeline/getTimeline";

const useTimelineData = (chainName: string, compareName: string) => {
  const [data, setData] = useState({
    chainNameIndexValues: [],
    compareNameIndexValues: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTimelineData(chainName, compareName || "");
        // @ts-ignore
        const { blockchain, cumulative } = response.data;
        setData({
          chainNameIndexValues: blockchain.tg_growth_index as any,
          compareNameIndexValues: cumulative.tg_growth_index as any,
        });
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch timeline data");
      }
    };

    fetchData();
  }, [chainName, compareName]);

  return data;
};

export default useTimelineData;
