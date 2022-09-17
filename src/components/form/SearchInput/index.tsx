import { FC, Dispatch, SetStateAction } from "react";
import SearchInputLogo from "./SearchInputLogo";

interface SearchInputProps {
  input: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const SearchInput: FC<SearchInputProps> = ({ input, setInputValue }) => {
  return (
    <form className="w-full sm:max-w-xs">
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
          value={input}
          onChange={({ target: { value } }) => {
            setInputValue(value || "");
          }}
          id="stock-search"
          className="block outline-none p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for stock info..."
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;