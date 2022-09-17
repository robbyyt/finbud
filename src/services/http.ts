import { STOCK_API_BASE_PATH, STOCK_API_KEY } from "config/api";
import { buildUrlParams } from "utils/url";

export const callStockApi = (
  path: ApiPath,
  searchParams?: Record<string, string>,
  options?: RequestInit
) => {
  return fetch(
    `${STOCK_API_BASE_PATH}${path}${buildUrlParams({
      ...searchParams,
      token: STOCK_API_KEY,
    })}`,
    {
      ...options,
    }
  ).then((response) => response.json());
};
