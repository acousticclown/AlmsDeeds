export const aidData = (state = { data: [], isLoading: false }, action) => {
    switch (action.type) {
      case "GET_AID_DATA": {
        return { ...state, data: action.payload };
      }
      default: {
        return state;
      }
    }
  };