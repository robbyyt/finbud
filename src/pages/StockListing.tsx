import { FC, useEffect } from "react";
import { getAllStocks } from "services/finance";

const StockListing: FC = () => {
  useEffect(() => {
    (async () => {
      const response = await getAllStocks();
      console.log(response);
    })();
  }, []);
  return <h1>Hi</h1>;
};

export default StockListing;
