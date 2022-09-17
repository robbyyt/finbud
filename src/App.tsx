import DefaultLayout from "components/layout/DefaultLayout";
import ErrorDialog from "components/ui/error/ErrorDialog";
import StockListing from "pages/StockListing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<StockListing />} />
      </Routes>
      <ErrorDialog />
    </DefaultLayout>
  );
}

export default App;
