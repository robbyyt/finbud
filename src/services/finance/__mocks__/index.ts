import { StockSymbolType } from "services/finance/schemas";

export const searchStockInfo = async (
  searchInput: string
): Promise<StockSymbolType[] | undefined> => {
  if (searchInput === "AAPL") {
    return Promise.resolve([
      {
        type: "Mock stock type",
        description: "mock description",
        displaySymbol: "mock display symbol 1",
        symbol: "AAPL",
      },
      {
        type: "Mock stock type",
        description: "mock description",
        displaySymbol: "mock display symbol 2",
        symbol: "AAPL.UX",
      },
    ]);
  }

  return Promise.resolve([]);
};
