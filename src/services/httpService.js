import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const unerror =
    error.response &&
    error.response.state >= 400 &&
    error.response.status < 500;

  if (!unerror) {
    console.log("unexcepeted error", error);
    toast.error("something failed :( ");
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
