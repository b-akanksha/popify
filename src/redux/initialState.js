const initialState = {
    token: "",
    alert: {
      open: false,
      message: ''
    },
    loading: false,
    userData: {
      data: [],
      mostPopularArtistScore: 0,
      leastPopularArtistScore: 0,
      averageScore: 0,
      mostPopularArtist: {},
      leastPopularArtist: {}
    }
  };
  
  export default initialState;
  