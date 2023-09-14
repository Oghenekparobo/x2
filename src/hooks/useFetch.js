import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const res = await fetchDataFromAPI(url);
        setLoading(false);
        setData(res);
      } catch (err) {
        setLoading(false);
        setError(err.message || "Something went wrong!");
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
