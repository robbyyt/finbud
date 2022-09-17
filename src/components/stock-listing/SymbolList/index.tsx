import { FC, useState, useEffect } from "react";
import LoadingSpinner from "components/ui/LoadingSpinner";
import SymbolItem from "components/stock-listing/SymbolItem";
import { StockSymbolType } from "services/finance/schemas";
import { searchStockInfo } from "services/finance";
import useError from "hooks/useError";
import { buildError } from "utils/error";

interface SymbolListProps {
  searchValue: string;
}

const SymbolList: FC<SymbolListProps> = ({ searchValue }) => {
  const [loading, setLoading] = useState(false);
  const [symbols, setSymbols] = useState<StockSymbolType[]>([]);
  const { setError } = useError();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const apiResponse = await searchStockInfo(searchValue);
        setSymbols(apiResponse || []);
      } catch (err) {
        setError(buildError(err));
      } finally {
        setLoading(false);
      }
    })();
  }, [searchValue, setError]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!symbols.length && searchValue) {
    return (
      <p className="text-red-400">
        No stocks to show, try typing another value
      </p>
    );
  }
  return (
    <>
      {symbols.map((symbol) => (
        <SymbolItem {...symbol} key={symbol.displaySymbol} />
      ))}
    </>
  );
};

export default SymbolList;
