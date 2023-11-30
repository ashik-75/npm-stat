import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CardList from "@/components/list/card-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useInfiniteMovies } from "@/features/movie/api/movies";
import Categories from "../../components/categories";
import { categories } from "./data";
import Icon from "@/components/ui/icon";

const Movies: React.FC = () => {
  const location = useLocation();

  const endpoint = categories?.find((cat) => cat.url === location.pathname)
    ?.value;

  const movies = useInfiniteMovies(endpoint);

  const movieList = movies?.data?.pages.map((page) => page.results).flat();

  return (
    <div className="space-y-5">
      <Categories items={categories} />

      <CardList
        isLoading={movies?.isLoading}
        isError={movies.isError}
        items={movieList}
        component={MovieComponent}
      />

      {movieList && movieList?.length > 0 && (
        <Button
          disabled={!movies?.hasNextPage || movies?.isFetchingNextPage}
          onClick={() => movies?.fetchNextPage()}
          className="space-x-2"
        >
          <span>{movies?.hasNextPage ? "Load More" : "No Data!"}</span>

          {movies?.isFetchingNextPage && (
            <Icon name="Loader" className="animate-spin" />
          )}
        </Button>
      )}
    </div>
  );
};

export default Movies;
