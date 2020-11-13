export const getYearFromString: (str:string) => number = function (
  str:string
): number {
  return new Date(str).getFullYear();
};


export const isSearch: (str:string) => boolean = function (
  str:string
): boolean {
  return str.includes('search');
}
