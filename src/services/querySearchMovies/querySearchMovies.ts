import axios from "axios";
import { apis } from "../envConstants";
// import {IAreaData} from 'src/modal';
// import {IAreaInfosDto} from 'src/dto';
// import {apis} from '@services/envConstants';
// import {httpClient} from '@services/httpClient';

const querySearchMovies = ({
  page,
  movie,
}: {
  page: number;
  movie: string;
}) => {
  console.log("page", movie);
  return axios
    .get(`${apis.search}&page=${page}&query=${movie}`)
    .then((res) => res.data);
};
export default querySearchMovies;
