const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const utils = {
  sleep,
};
