import axios from "axios";
import { LOGIN, BASIC_AUTH } from "./constants.js";

const qs = require("querystring");

export default {
  login: params => {
    console.log(params);
    axios.post(LOGIN, qs.stringify(params), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${BASIC_AUTH}`
      },
      withCredentials: true
    });
  }
};
