import * as api from '../utils/axios';

export const getTopItemsService = async (item, timeRange, limit) => {
    return api.getRequest(`me/top/${item}?time_range=${timeRange}&limit=${limit}`)
}