import { z } from "zod";

export const StockSymbolDTO = z.object({
  type: z.string(),
  description: z.string(),
  displaySymbol: z.string(),
  symbol: z.string(),
});

export type StockSymbolType = z.infer<typeof StockSymbolDTO>;
