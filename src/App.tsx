import DefaultLayout from "components/layout/DefaultLayout";
import StockListing from "pages/StockListing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<StockListing />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
