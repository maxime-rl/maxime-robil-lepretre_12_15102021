import axios from "axios";
import authHeader from "./auth-header";

const getUserBoard = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/user/profile", {
    headers: authHeader(),
  });
};

export default getUserBoard;
