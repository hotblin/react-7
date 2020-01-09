import { useState, useEffect } from "react";
import sleep from "@/utils/sleep";

function useAuth() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    async function fetchUserInfo() {
      await sleep(1000);
      setUserInfo({
        name: "hotlbin",
        id: new Date().getTime(),
        role: "user"
      });
    }
    fetchUserInfo();
    return () => null;
  }, []);
  return null || null;
}

export default useAuth;
