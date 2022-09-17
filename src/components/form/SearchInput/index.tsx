import { FC, ChangeEventHandler } from "react";
import SearchInputLogo from "./SearchInputLogo";

interface SearchInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  return (
    <div className="w-full sm:max-w-xs">
      <label
        htmlFor="stock-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <SearchInputLogo />
        <input
          type="search"
          onChange={onChange}
          id="stock-search"
          className="block outline-none p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for stock info..."
          required
        />
      </div>
    </div>
  );
};

export default SearchInput;
