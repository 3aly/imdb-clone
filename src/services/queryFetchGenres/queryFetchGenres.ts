import axios from "axios";
import { apis } from "../envConstants";

const queryFetchGenres = () => {
  return axios.get(`${apis.genre}`).then((res) => res.data);
};
export default queryFetchGenres;
