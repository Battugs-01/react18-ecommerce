import { useEffect , useState } from "react";

function useData(url , defaultValue = {}) {
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      }).catch((err)=> {
        console.log("Error Fetching Data", err);
        console.log(err);
        setData(defaultValue);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return {data , loading};

}

export default useData;