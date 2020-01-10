import { useState, useEffect } from "react";
import sleep from "@/utils/sleep";

// function hasAuth() {
//   const [userInfo, loading] = useAuth();
// }

function useAuth(token) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

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
      } else {
        setUserInfo(null);
      }
      setLoading(false);
    })();

    return () => null;
  }, [token]);

  return [userInfo, loading];
}

export default useAuth;
