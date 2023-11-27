import { IEncryptionDto } from "src/dto";
import { IEncryptionResponse } from "src/modal";
import { useQuery } from "@tanstack/react-query";
import { queryAesEncryption } from "@services/index";

export const useFetchMovies = (
  encryptedString: IEncryptionDto | null,
  flag: boolean,
  onSuccess: (param: IEncryptionResponse) => void,
  onError: (param: IEncryptionResponse) => void
) => {
  return useQuery({
    queryKey: ["encryptedString", encryptedString],
    queryFn: () => queryAesEncryption(encryptedString),
    enabled: flag,
    onSuccess: onSuccess,
    onError: onError,
    // retry: false,
  });
};
