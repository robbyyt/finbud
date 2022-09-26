import { FC, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  CategoryScale,
  ChartOptions,
} from "chart.js";
import AnnotationPlugin from "chartjs-plugin-annotation";

import LoadingSpinner from "components/ui/LoadingSpinner";

import { getDataForStock } from "services/finance";
import { StockValueInfoType } from "services/finance/schemas";
import { convertDateToUnixTimestamp } from "utils/date";
import useError from "hooks/useError";
import { buildError } from "utils/error";
import { getFormattedChartData, annotation } from "./helpers/chart";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  AnnotationPlugin
);

interface StockValuesChartProps {
  meanEnabled: boolean;
  startDate: Date;
  endDate: Date;
  symbol?: string;
}

const StockValuesChart: FC<StockValuesChartProps> = ({
  startDate,
  endDate,
  symbol,
  meanEnabled,
}) => {
  const [loading, setLoading] = useState(false);
  const [stockData, setStockData] = useState<StockValueInfoType>();
  const { setError } = useError();
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Stock values for ${symbol}`,
      },
      ...(meanEnabled && {
        annotation: {
          annotations: {
            annotation,
          },
        },
      }),
    },
  } as ChartOptions<"line">;

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

  if (stockData?.s === "no_data") {
    return (
      <div className="flex items-center p-8">
        <h1 className="font-extrabold text-2xl text-center dark:text-gray-600">
          No data found for given interval
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-8/12">
      <Line options={chartOptions} data={getFormattedChartData(stockData)} />
    </div>
  );
};

export default StockValuesChart;
