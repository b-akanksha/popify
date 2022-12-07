import {
  clearData,
  hideLoader,
  setAverageScore,
  setData,
  setLeastPopular,
  setMostPopular,
  showAlert,
  showLoader,
} from './actions';
import { getTopItemsService } from './services';

export const getTopItemsThunks = (item,timeRange, limit) => {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const response = await getTopItemsService(item, timeRange, limit);
      if (response.status === 200) {
        const sortedData = response.data.items.sort((a,b) => b.popularity - a.popularity);
        const requiredData = sortedData.map(item => ({id: item.id, images: item?.images ? item?.images[0] : item?.album?.images ? item?.album?.images[0] : null, name: item.name, popularity: item.popularity}))

        dispatch(setData(requiredData));
        const popularityScore =
        requiredData.reduce((accumulator, object) => {
            return accumulator + object.popularity;
          }, 0) / limit;

        dispatch(setAverageScore(popularityScore));
        const max = Math.max(...requiredData.map((o) => o.popularity));
        dispatch(
          setMostPopular(requiredData.find((item) => item.popularity === max)
          )
        );

        const min = Math.min(...requiredData.map((o) => o.popularity));
        dispatch(
          setLeastPopular(requiredData.find((item) => item.popularity === min))
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
