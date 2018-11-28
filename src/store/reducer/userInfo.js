const initState = {};
export default (state = initState, actions) => {
  switch (actions.type) {
    case 'update_user':
      return Object.assign(state, actions.info);
    case 'clear_user':
      break;

    default:
      return state;
  }
}