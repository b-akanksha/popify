import axios from "axios";
import { Buffer } from "buffer";
import * as api from '../utils/axios';

export const getTopArtistsService = async (timeRange, limit) => {
    return api.getRequest(`me/top/artists?time_range=${timeRange}&limit=${limit}`)
}