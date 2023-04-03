import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setisOnilne] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setisOnilne(true);
    };
    const handleOffline = () => {
      setisOnilne(false);
    };

    window.addEventListener("online", () => {
      setisOnilne(true);
    });
    window.addEventListener("offline", () => {
      setisOnilne(false);
    });
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
