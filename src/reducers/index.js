export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { userName: action.text };
    default:
      return state;
  }
};
