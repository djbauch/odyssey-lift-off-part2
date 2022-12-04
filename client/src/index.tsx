import * as React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
