import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { LocationProvider } from "@reach/router";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocationProvider>
      <GlobalStyles />
      <Pages />
    </LocationProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
