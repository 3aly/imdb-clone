import { useQuery } from "react-query";
import { queryFetchGenres } from "../../services";

export const useFetchGenres = (rest) => {
  const query = useQuery({
    queryKey: ["useFetchGenres"],
    queryFn: () => queryFetchGenres(),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
