import { ChartData } from "chart.js";
import { StockValueInfoType } from "services/finance/schemas";
import { formatDate } from "utils/date";
import { average } from "utils/array";

const formatToChartData = (
  labels: string[],
  data: number[]
): ChartData<"line", number[], unknown> => {
  return {
    labels,
    datasets: [
      {
        label: "Closing price",
        data,
        backgroundColor: "rgb(31,41,55, 0.5)",
        borderColor: "rgb(31,41,55)",
      },
    ],
  };
};

/**
 * We will use this function to format the data received from the api (currently just the closing price)
 * to a format that can be given to the chart.js component
 */
export const getFormattedChartData = (
  stockValueInfo?: StockValueInfoType
): ChartData<"line", number[], unknown> => {
  const timestaps = stockValueInfo?.t;
  const closingValues = stockValueInfo?.c;

  if (!timestaps?.length) {
    return formatToChartData([], []);
  }
  const stockValues: number[] = [];
  const dateLabels: string[] = [];

  timestaps?.forEach((timestamp, index) => {
    dateLabels.push(formatDate(new Date(timestamp * 1000)));
    stockValues.push(closingValues?.[index] || 0);
  });

  return formatToChartData(dateLabels, stockValues);
};

export const annotation = {
  type: "line",
  id: "avg-annotation",
  borderColor: "purple",
  borderDash: [6, 6],
  borderDashOffset: 0,
  borderWidth: 3,
  label: {
    display: true,
    content: (ctx: any) =>
      "Average: " + average(ctx.chart.data.datasets[0].data || []).toFixed(2),
    position: "end",
  },
  scaleID: "y",
  value: (ctx: any) => average(ctx?.chart?.data?.datasets[0]?.data || []),
};
