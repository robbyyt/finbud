import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <img
      src="/assets/loading/rings.svg"
      className="w-48 m-6 sm:m-12"
      alt="loading spinner"
    />
  );
};

export default LoadingSpinner;
