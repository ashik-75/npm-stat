import Icon from "@/components/ui/icon";
import { useSearchNpmData } from "@/features/trends/api/npm";
import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "@nextui-org/react";
import { getUniqueArray } from "@/features/trends/utils/helper";

const SearchBar: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 500);
  const searchResult = useSearchNpmData(debounceSearchTerm);

  const handleSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search") as string);
    e.currentTarget.reset();
    e.currentTarget.focus();
  };

  const handleNavigation = (path: string) => {
    if (path) {
      const modifiedPath = params.packages
        ? getUniqueArray(`${params.packages}-vs-${path}`).join("-vs-")
        : path;
      navigate(modifiedPath);
      setSearchTerm("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <Input
          isClearable
          variant="underlined"
          type="string"
          name="search"
          value={searchTerm}
          placeholder="Search packages ...."
          onChange={handleSeach}
          onClear={() => setSearchTerm("")}
          className=""
          startContent={
            searchResult.isLoading && (
              <Icon name="Loader" className="animate-spin" />
            )
          }
        />
      </form>

      {searchTerm &&
        searchResult.data?.objects &&
        searchResult.data?.objects.length > 0 && (
          <div
            className={
              "absolute left-0 top-[55px] z-50 h-[300px]  w-full shrink-0 divide-y-1 overflow-y-auto border shadow-lg transition-all"
            }
          >
            {searchResult.data?.objects.map((np) => (
              <div
                onClick={() => handleNavigation(np.package.name)}
                key={np.package.version}
                className="cursor-pointer bg-white p-4 hover:bg-slate-50"
              >
                <h1 className="font-bold">{np.package.name}</h1>
                <h1>{np.package.description}</h1>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchBar;
