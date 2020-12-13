export const donations = (state = { data: [], personById: {}, isLoading: false }, action) => {
    switch (action.type) {
      case "GET_DONATIONS": {
        return { ...state, data: action.payload };
      }
      case "GET_PERSON_BY_ID": {
        return { ...state, personById: action.payload };
      }
      default: {
        return state;
      }
    }
  };