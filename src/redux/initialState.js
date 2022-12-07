const initialState = {
    token: "",
    alert: {
      open: false,
      message: ''
    },
    loading: false,
    userData: {
      data: [],
      averageScore: 0,
      mostPopular: {},
      leastPopular: {},
    }
  };
  
  export default initialState;
  