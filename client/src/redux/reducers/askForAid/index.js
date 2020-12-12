export const aidRequest = (state = {data: [], isLoading: false }, action) => {
    switch (action.type) {
      case "REQUEST_AID": {
        return { ...state, values: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  