import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum-3-oals.onrender.com/api",
});

export default axiosBaseURL;
export const axiosImageURL = "https://evangadi-forum-2-yels.onrender.com";
