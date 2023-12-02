import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactElement } from "react";

export function ProvidersWrapper({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
