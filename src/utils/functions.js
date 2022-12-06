import axios from "axios";

export const setAuthHeader = () => {
  try {
    const token = localStorage.getItem("spotify_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};
