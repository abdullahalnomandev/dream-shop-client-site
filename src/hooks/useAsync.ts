import { useEffect, useState } from "react";

type statusType = "idle" | "pending" | "success" | "error";

const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<statusType>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus("pending");
    setData(null);
    setError(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus("success");
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
        setData(null);
      });
  }, [asyncFunction]);

  return {
    data,
    error,
    isLoading: status === "pending",
    isSuccess: status === "success",
  };
};

export default useAsync;
