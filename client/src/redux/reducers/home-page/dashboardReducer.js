export const dashboardData = (state = { data: [], isLoading: false }, action) => {
    switch (action.type) {
      case "GET_DASHBOARD_DATA": {
        return { ...state, data: action.payload };
      }
      default: {
        return state;
      }
    }
};