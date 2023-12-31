import axios from "axios";
import { useQuery } from "react-query";

const fetchData = (url:string, option:{}) => {
  axios.post(`http://localhost:3000/api/v1${url}`, option)
    .then(response => {
      if (!response.data.success) throw new Error(response.data.message);
      return response.data
    }).catch(err => {
      return err
    })
};

export const useFetch = (url:string, option:{}) => {
  return useQuery(['fetchData', url, option], () => fetchData(url, option))
}