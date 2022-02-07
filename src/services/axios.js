import axios from "axios";

const AxiosService = {
  postMethod: (url, data, headers = false) => {
    console.log(headers, data, "post axios");
    return axios.post(url, data, headers);
  },

  getMethod: (url, headers = false) => {
    console.log("in axios get");
    return axios.get(url, headers);
  },

  putMethod: (url, data, headers = false) => {
    console.log(headers, data, "putt axios");
    return axios.put(url, data, headers);
  },
};

export default AxiosService;
