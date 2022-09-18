import { FC, useEffect, useState } from "react";
import { getDataForStock } from "services/finance";
import { StockValueInfoType } from "services/finance/schemas";
import { convertDateToUnixTimestamp } from "utils/date";
import useError from "hooks/useError";
import { buildError } from "utils/error";
import LoadingSpinner from "components/ui/LoadingSpinner";

interface StockValuesChartProps {
  startDate: Date;
  endDate: Date;
  symbol?: string;
}

const StockValuesChart: FC<StockValuesChartProps> = ({
  startDate,
  endDate,
  symbol,
}) => {
  const [loading, setLoading] = useState(false);
  const [stockData, setStockData] = useState<StockValueInfoType>();
  const { setError } = useError();

  useEffect(() => {
    (async () => {
      try {
        if (symbol) {
          setLoading(true);
          const stockDataResponse = await getDataForStock(
            symbol,
            convertDateToUnixTimestamp(startDate),
            convertDateToUnixTimestamp(endDate)
          );
          setStockData(stockDataResponse);
        }
      } catch (err) {
        setError(buildError(err));
      } finally {
        setLoading(false);
      }
    })();
  }, [startDate, endDate, symbol, setError]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <></>;
};

export default StockValuesChart;
