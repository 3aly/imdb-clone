import { useInfiniteQuery } from "react-query";
import { queryAllMovies } from "../../services";
import { MoviesDataType } from "../../types";

export const useFetchAllMovies = ({
  onSuccess,
  enabled,
}: {
  enabled: boolean;
  onSuccess: (data: { pages: MoviesDataType[] }) => void;
}) => {
  const query = useInfiniteQuery({
    queryKey: ["queryAllMovies"],
    queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
      queryAllMovies({ page: pageParam }),
    getNextPageParam: (
      lastPage,
      allPages: MoviesDataType[][]
    ): number | undefined => {
      return allPages.length + 1;
    },
    enabled: enabled,
    onSuccess: onSuccess,
    refetchOnWindowFocus: false,
  });

  return query;
};
