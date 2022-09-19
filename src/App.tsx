import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "components/layout/DefaultLayout";
import ErrorDialog from "components/ui/error/ErrorDialog";
import LoadingSpinner from "components/ui/LoadingSpinner";

const NotFoundPage = lazy(() => import("./pages/NotFound"));
const StockDetailsPage = lazy(() => import("./pages/StockDetails"));
const StockListingPage = lazy(() => import("./pages/StockListing"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
