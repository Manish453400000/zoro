import axios from "axios";

export const useFetchData = async (email, pass) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/user?email=${email}&password=${pass}`
    );
    if (!response.data.success) return;
    return response.data;
  } catch (e) {
    console.log("Error:", e);
  }
};

useFetchData("doluimanish83@gmail.com", "manish9062").then((data) =>
  console.log(data)
);
