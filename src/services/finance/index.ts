import { z } from "zod";
import { callStockApi } from "services/http";
import { StockSymbolDTO, StockValueInfoDTO } from "./schemas";

export const searchStockInfo = async (searchInput: string) => {
  if (!searchInput) {
    return;
  }
  try {
    const response = await callStockApi("/search", { q: searchInput });

    if (response?.error) {
      throw new Error(response?.error);
    }

    return z.array(StockSymbolDTO).parseAsync(response?.result);
  } catch (err) {
    if (err instanceof z.ZodError)
      throw new Error("A Validation error occured");
    throw err;
  }
};

export const getDataForStock = async (
  symbol: string,
  from: number,
  to: number,
  resolution: StockDataResolution = "D"
) => {
  try {
    const response = await callStockApi("/stock/candle", {
      symbol,
      resolution,
      from,
      to,
    });

    if (response?.error) {
      throw new Error(response?.error);
    }

    return StockValueInfoDTO.parse(response);
  } catch (err) {
    if (err instanceof z.ZodError)
      throw new Error("A Validation error occured");
    throw err;
  }
};
