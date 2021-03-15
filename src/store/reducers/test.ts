const reducer = (state: any, action: any) => {
  if (state === undefined) {
    return { n: 0 };
  } else {
    if (action.type === "add") {
      return { n: state.n + action.payload };
    } else {
      return state;
    }
  }
};

export default reducer