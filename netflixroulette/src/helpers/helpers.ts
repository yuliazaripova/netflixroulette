export const getYearFromString: (str:string) => number = function (
  str:string
): number {
  return new Date(str).getFullYear();
};
