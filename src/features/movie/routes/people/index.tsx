import React from "react";
import { useGetPersonist } from "../../api/people";
import CardList from "@/components/list/card-list";
import PeopleComponent from "@/features/movie/components/people";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const People: React.FC = () => {
  const personList = useGetPersonist("person/popular");
  const people_list = personList?.data?.pages
    .map((page) => page.results)
    .flat();

  return (
    <div className="space-y-5">
      <CardList
        items={people_list}
        component={PeopleComponent}
        isLoading={personList?.isLoading}
        isError={personList.isError}
      />

      {people_list && people_list.length > 0 && (
        <Button
          onClick={() => personList?.fetchNextPage()}
          disabled={!personList?.hasNextPage || personList?.isFetchingNextPage}
          className="space-x-4"
        >
          <span>Load More</span>
          {personList?.isFetchingNextPage && (
            <Icon name="Loader" className="aimate-spin" />
          )}
        </Button>
      )}
    </div>
  );
};

export default People;
