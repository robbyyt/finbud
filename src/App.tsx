import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import StockDetailsPage from "pages/StockDetails";
import StockListingPage from "pages/StockListing";

import DefaultLayout from "components/layout/DefaultLayout";
import ErrorDialog from "components/ui/error/ErrorDialog";
import LazyLoadingFallback from "components/ui/LazyLoadingFallback";

const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<LazyLoadingFallback />}>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<StockListingPage />} />
          <Route path="stocks/:symbol" element={<StockDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ErrorDialog />
      </DefaultLayout>
    </Suspense>
  );
}

export default App;
