import axios from "axios";
import { apis } from "../envConstants";
// import {IAreaData} from 'src/modal';
// import {IAreaInfosDto} from 'src/dto';
// import {apis} from '@services/envConstants';
// import {httpClient} from '@services/httpClient';

const querySearchMovies = ({ page }: { page: number }) => {
  return axios.get(`${apis.discover}&page=${page}`).then((res) => res.data);
};
export default querySearchMovies;
