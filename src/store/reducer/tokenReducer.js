import { setToken, getToken } from "@/utils/token";

export default (state = getToken(), actions) => {
  switch (actions.type) {
    case "SET_TOKEN":
      state = actions.payload;
      setToken(actions.payload);
    default:
      return state;
  }
};
