import { FC } from "react";
import { StockSymbolType } from "services/finance/schemas";

const SymbolItem: FC<StockSymbolType> = ({ symbol, type, description }) => {
  return (
    <div className="w-full  p-1 rounded-md border-2">
      <h3 className="font-bold">{symbol}</h3>
      <p className="text-gray-500 whitespace-nowrap">Type: {type}</p>
      <p className="text-ellipsis">Description: {description}</p>
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
      >
        View details
      </button>
    </div>
  );
};

export default SymbolItem;
