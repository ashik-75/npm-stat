import React from "react";
import SearchBar from "../components/search-bar";
import { Outlet, useParams } from "react-router-dom";
import PackageTag from "../components/package-tag";
import SearchSuggestion from "../components/search-suggestion";

const Home: React.FC = () => {
  const params = useParams();
  return (
    <div className="relative space-y-5">
      <SearchBar />
      <PackageTag packageString={params.packages} />
      <Outlet />

      <SearchSuggestion />
    </div>
  );
};

export default Home;
