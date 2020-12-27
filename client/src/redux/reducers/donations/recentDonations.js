export const recentDonations = (state = { data: [], isLoading: false }, action) => {
    switch (action.type) {
      case "GET_RECENT_DONATIONS": {
        return { ...state, data: action.payload };
      }
      default: {
        return state;
      }
    }
  };