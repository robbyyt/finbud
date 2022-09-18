import { z } from "zod";

export const StockSymbolDTO = z.object({
  type: z.string(),
  description: z.string(),
  displaySymbol: z.string(),
  symbol: z.string(),
});

export type StockSymbolType = z.infer<typeof StockSymbolDTO>;

export const StockValueInfoDTO = z.object({
  s: z.enum(["ok", "no_data"]),
  c: z.array(z.number()),
  h: z.array(z.number()),
  l: z.array(z.number()),
  o: z.array(z.number()),
  t: z.array(z.number()),
  v: z.array(z.number()),
});

export type StockValueInfoType = z.infer<typeof StockValueInfoDTO>;
