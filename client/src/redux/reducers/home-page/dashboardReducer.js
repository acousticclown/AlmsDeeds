const INITIAL_STATE = {
  data: {
    TotalUsers: [
      {
        count: 0
      }
    ],
    TotalDonation: 0,
    TotalDonors: [],
    TransactionMade:[{
      count: 0
    }],
    TotalAids: [{
      count: 0
    }]
  },
  isLoading: false
}

export const dashboardData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_DASHBOARD_DATA": {
        return { ...state, data: action.payload };
      }
      default: {
        return state;
      }
    }
};