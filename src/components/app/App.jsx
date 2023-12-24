import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../header/Header";
import AppRoutes from "./AppRoutes";
import "./app.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <div className="container">
          <AppRoutes />
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
