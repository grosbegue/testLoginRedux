export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action.text);
      return { userName: action.text };
    default:
      return state;
  }
};
