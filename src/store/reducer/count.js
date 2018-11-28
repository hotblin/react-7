const initState = {};
export default (state = initState, actions) => {
  switch (actions.type) {
    case 'incream2':
      console.log("reducer更新:" + JSON.stringify(actions));
      return Object.assign(state, actions.payload);
    case 'clear_user':
      break;
    default:
      return state;
  }
}