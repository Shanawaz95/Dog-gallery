import { useState, useEffect } from "react";

function FetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((obj) => setData(obj.message));

    setIsLoading(false);
  }, [url]);

  return {
    data,
    isLoading,
  };
}

export default FetchData;
