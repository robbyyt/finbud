export const average = (nums: number[]) => {
  return nums.reduce((a: number, b: number) => a + b, 0) / nums.length;
};
