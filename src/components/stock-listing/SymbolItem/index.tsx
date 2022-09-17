import { FC } from "react";
import { StockSymbolType } from "services/finance/schemas";

const SymbolItem: FC<StockSymbolType> = ({
  symbol,
  type,
  description,
  displaySymbol,
}) => {
  return (
    <>
      <p>{symbol}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>{displaySymbol}</p>
    </>
  );
};

export default SymbolItem;
