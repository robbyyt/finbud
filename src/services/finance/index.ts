import { z } from "zod";
import { callStockApi } from "services/http";
import { StockSymbolDTO } from "./schemas";

export const searchStockInfo = async (searchInput: string) => {
  if (!searchInput) {
    return;
  }

  const response = await callStockApi("/search", { q: searchInput });

  return z.array(StockSymbolDTO).parseAsync(response?.result);
};
