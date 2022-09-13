import { z } from "zod";

export const StockSymbolDTO = z.object({
  currency: z.string(),
  description: z.string(),
  displaySymbol: z.string(),
  symbol: z.string(),
});
