import { ThemeProvider } from "@emotion/react";
import { RootState } from "@reduxjs/toolkit/query";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { darkTheme, theme } from "./constants";
import { ReactElement } from "react";

export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </>
  );
}
