import axios from "axios";

/**
 * Base axios instance available
 */
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
