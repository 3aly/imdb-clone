// const prod = false; //change boolean to switch between prod and dev

const API_KEY = "6ba69220b9e6fdff194c47a501ccc528";
const DiscoverUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&api_key=${API_KEY}`;
const SearchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&api_key=${API_KEY}`;
export const apis = {
  discover: DiscoverUrl,
  search: SearchUrl,
};
