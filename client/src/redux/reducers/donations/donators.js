export const donators = (state = { data: [], isLoading: false }, action) => {
    switch (action.type) {
      case "GET_TOP_DONATORS": {
        return { ...state, data: action.payload };
      }
      default: {
        return state;
      }
    }
  };