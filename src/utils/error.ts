/**
 * Simple utility function to construct a standardised error object
 */
export const buildError = (error: any): { message: string } => {
  if (typeof error === "string") {
    return { message: error };
  }

  const errorMessage =
    error?.message && typeof error?.message === "string"
      ? error.message
      : "Unkown error.";

  return {
    message: errorMessage,
  };
};
