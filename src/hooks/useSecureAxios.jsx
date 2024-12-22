import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_APIURL,
  withCredentials: true,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,

      async (error) => {
        console.log(
          "error caught from our very own axios interceptor-->",
          error.response
        );
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          // logOut();
          // navigate to login
          // navigate("/login");
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
