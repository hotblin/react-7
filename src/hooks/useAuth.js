import { useState, useEffect } from "react";
import sleep from "@/utils/sleep";

function useAuth(token) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      await sleep(1000);
      if (token && token.includes("admin")) {
        setUserInfo({
          name: "hotlbin",
          id: new Date().getTime(),
          role: "user"
        });
        setAuth(true);
      } else {
        setUserInfo(null);
        setAuth(false);
      }
      setLoading(false);
    })();
    return () => null;
  }, [token]);

  return [auth, loading, userInfo];
}

export default useAuth;
