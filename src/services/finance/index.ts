import { z } from "zod";
import { callStockApi } from "services/http";
import { StockSymbolDTO, StockValueInfoDTO } from "./schemas";

export const searchStockInfo = async (searchInput: string) => {
  if (!searchInput) {
    return;
  }

  const response = await callStockApi("/search", { q: searchInput });

  return z.array(StockSymbolDTO).parseAsync(response?.result);
};

export const getDataForStock = async (
  symbol: string,
  from: number,
  to: number,
  resolution: StockDataResolution = "D"
) => {
  const response = await callStockApi("/stock/candle", {
    symbol,
    resolution,
    from,
    to,
  });

  return StockValueInfoDTO.parseAsync(response);
};
