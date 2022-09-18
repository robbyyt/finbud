import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import SearchInput from "components/form/SearchInput";
import SymbolList from "components/stock-listing/SymbolList";

const StockListing = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedOnChange = useDebouncedCallback(
    ({ target: { value } }) => setSearchValue(value),
    500
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchInput onChange={debouncedOnChange} id="stock-search" />
      <SymbolList searchValue={searchValue} />
    </div>
  );
};

export default StockListing;
