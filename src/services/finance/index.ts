import { z } from "zod";
import { callStockApi } from "services/http";
import { StockSymbolDTO } from "./schemas";

export const getAllStocks = async () => {
  const response = await callStockApi("/stock/symbol", undefined, {
    exchange: "US",
  });

  return z.array(StockSymbolDTO).parseAsync(response);
};
