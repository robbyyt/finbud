import LoadingSpinner from "components/ui/LoadingSpinner";

const LazyLoadingFallback = () => (
  <div className="w-full h-full flex justify-center items-center">
    <LoadingSpinner />
  </div>
);

export default LazyLoadingFallback;
