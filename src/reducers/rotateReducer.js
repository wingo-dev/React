let defalut = {
  rotating: true,
  count: 0
};

const rotateReducer = (state = {...defalut}, action) => {
    switch (action.type) {
      case "rotate":
        return {
          ...state,
          rotating: action.payload
        };
      case "INCREASE":
        return {
          ...state,
          count: state.count+action.payload
        };
      case "DECREASE":
        return {
          ...state,
          count: state.count-action.payload
        };
      default:
        return state;
    }
  };
export default rotateReducer;