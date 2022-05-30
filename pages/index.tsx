import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import Layout from "@components/layout";
import Search from "@components/search";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const Home: React.FC = () => {
  return (
    <Layout title="Shop">
      <InstantSearch indexName="bestbuy" searchClient={searchClient}>
        <Search />
      </InstantSearch>
    </Layout>
  );
};

export default Home;
