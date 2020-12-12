import axios from "axios";

//axios instance
export const authInstance = axios.create({
  baseURL: "https://voidminds-backend.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + localStorage.getItem("auth-token"),
  },
  validateStatus: (status) => status < 500,
});

authInstance.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.error(error);
    // return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    const token = response.headers.authorization;
    console.log(token);
    localStorage.setItem("auth-token", token);
    localStorage.setItem("userRole", response.data.data.userType);
    if (!response.data.success) {
      alert(response.data.message);
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//axios instance
export const instance = axios.create({
  baseURL: "https://voidminds-backend.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + localStorage.getItem("auth-token"),
  },
  validateStatus: (status) => status < 500,
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.error(error);
    // return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    const token = response.headers.authorization;
    if (!response.data.success) {
      alert(response.data.message);
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
