import { setToken, getToken } from "@/utils/token";

export default (state = getToken(), actions) => {
  switch (actions.type) {
    case "SET_TOKEN":
      setToken(actions.payload);
      return (state = actions.payload);
    default:
      return state;
  }
};
