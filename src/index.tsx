import ReactDOM from "react-dom/client";
import "./index.css";

import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: Infinity,
      retry: 0,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
root.render(
  <QueryClientProvider client={query}>
    <RecoilRoot>
      <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>
  </QueryClientProvider>
);
