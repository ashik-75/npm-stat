import { List, ListItem } from "@tremor/react";
import React from "react";
import { Link } from "react-router-dom";
import { frontendSuggestion, backendSuggestion } from "../utils/constant";

const SearchSuggestion: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <section className="space-y-5">
        <h1 className="text-xl font-bold text-zinc-500">
          Frontend Technologies
        </h1>
        <List>
          {frontendSuggestion.map((suggestion) => (
            <ListItem key={suggestion.url}>
              <Link to={`${suggestion.url}`}>{suggestion.title}</Link>
            </ListItem>
          ))}
        </List>
      </section>

      <section className="space-y-5">
        <h1 className="text-xl font-bold text-zinc-500">
          Backend Technologies
        </h1>

        <List>
          {backendSuggestion.map((suggestion) => (
            <ListItem key={suggestion.url}>
              <Link to={`${suggestion.url}`}>{suggestion.title}</Link>
            </ListItem>
          ))}
        </List>
      </section>
    </div>
  );
};

export default SearchSuggestion;
