/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const login = async (email, password) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/user/login",
    {
      email,
      password,
    }
  );
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
