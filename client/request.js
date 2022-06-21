import axios from "axios";
import { getValue } from "../utils/common";
import { baseUrl } from "./config";
export const signup = async (payload) => {
  try {
    const res = await axios.post(baseUrl + "/signup", payload);
    // console.log({ res });
    return res.data;
  } catch (error) {
    // console.log(error.response);

    // return console.log(getValue(error, ["response", "data"], null));
    return getValue(error, ["response", "data"]);
  }
};
