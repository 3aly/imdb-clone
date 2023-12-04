import { UseQueryOptions, useQuery } from "react-query";
import { queryFetchGenres } from "../../services";
import { GenreType } from "../../types";

export const useFetchGenres = (
  rest: UseQueryOptions<{ genres: GenreType[] }, GenreType[]>
) => {
  const query = useQuery({
    queryKey: ["useFetchGenres"],
    queryFn: () => queryFetchGenres(),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
