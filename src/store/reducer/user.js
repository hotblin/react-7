const initState = {};
export default (state = initState, actions) => {
  switch (actions.type) {
    case 'SYNC_UPDATE_USERINFO':
      const userInfo = actions.payload;
      return { ...state,
        ...userInfo
      }
    case 'GET_USERINFOR':
      return state;
    default:
      return state;
  }
}