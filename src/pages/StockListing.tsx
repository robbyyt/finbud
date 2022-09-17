import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import LoadingSpinner from "components/ui/LoadingSpinner";
import SearchInput from "components/form/SearchInput";

const StockListing: FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [value] = useDebounce(searchValue, 500);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex justify-center">
      <SearchInput input={searchValue} setInputValue={setSearchValue} />
    </div>
  );
};

export default StockListing;
