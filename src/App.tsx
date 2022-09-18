import DefaultLayout from "components/layout/DefaultLayout";
import ErrorDialog from "components/ui/error/ErrorDialog";
import NotFoundPage from "pages/NotFound";
import StockDetails from "pages/StockDetails";
import StockListing from "pages/StockListing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<StockListing />} />
        <Route path="stocks/:symbol" element={<StockDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ErrorDialog />
    </DefaultLayout>
  );
}

export default App;
