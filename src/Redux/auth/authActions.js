import axios from "axios";
import { host } from "../../contstants";

export const signup =
  ({ name, email, password }) =>
  async () => {
    try {
      console.log(name, email, password);
      var arts = await axios.get(`${host}/arts`)
      console.log(arts)
    } catch (error) {
      console.log(error);
    }
  };

export const login =
  ({ email, password }) =>
  async () => {
    try {
      console.log(email, password);
      var user = await axios.post(`${host}/auth/login`,{email,password})
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };
