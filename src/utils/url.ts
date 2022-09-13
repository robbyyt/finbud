export const buildUrlParams = (paramDictionary?: Record<string, string>) => {
  if (!paramDictionary) return "";

  return `?${new URLSearchParams(paramDictionary)}`;
};
