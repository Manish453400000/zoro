import axios from "axios";

export const useFetchData = async () => {
  try {
    const response = await axios.get("/api/v1/anime");
    if (!response) return;
    return response.data;
  } catch (e) {
    console.log("Error:", e);
  }
};
