import {
  clearData,
  hideLoader,
  setArtists,
  setAverageScore,
  setLeastPopularArtists,
  setMostPopularArtists,
  showAlert,
  showLoader,
} from './actions';
import { getTopArtistsService } from './services';

export const getTopArtistsThunks = (timeRange, limit) => {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const response = await getTopArtistsService(timeRange, limit);
      if (response.status === 200) {
        const sortedData = response.data.items.sort((a,b) => b.popularity - a.popularity);
        const requiredData = sortedData.map(item => ({id: item.id, images: item.images[0], name: item.name, popularity: item.popularity}))
        dispatch(setArtists(requiredData));
        const popularityScore =
        requiredData.reduce((accumulator, object) => {
            return accumulator + object.popularity;
          }, 0) / limit;
        dispatch(setAverageScore(popularityScore));
        const max = Math.max(...requiredData.map((o) => o.popularity));
        dispatch(
          setMostPopularArtists({
            score: max,
            artist: requiredData.find((item) => item.popularity === max),
          })
        );
        const min = Math.min(...requiredData.map((o) => o.popularity));
        dispatch(
          setLeastPopularArtists({
            score: min,
            artist: requiredData.find((item) => item.popularity === min),
          })
        );
        dispatch(hideLoader());
      } 
    } catch (error) {
      dispatch(clearData());
      dispatch(hideLoader());
      dispatch(showAlert(error.response.data.error.message));
    }
  };
};
