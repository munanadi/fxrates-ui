export interface Currency {
  name: string;
  symbol: string;
  code: string;
}

export const currencyDetails: Currency[] = [
  {
    name: "India Rupee",
    symbol: "₹",
    code: "INR",
  },
  {
    name: "United Arab Emirates Dirham",
    symbol: "د.إ",
    code: "AED",
  },
  {
    name: "Euro",
    symbol: "€",
    code: "EUR",
  },
  {
    name: "Chinese Yuan",
    symbol: "¥",
    code: "CNY",
  },
  {
    name: "Japanese Yen",
    symbol: "¥",
    code: "JPY",
  },
  {
    name: "Hong Kong Dollar",
    symbol: "HK$",
    code: "HKD",
  },
  {
    name: "Indonesian Rupiah",
    symbol: "Rp",
    code: "IDR",
  },
  {
    name: "Canadian Dollars",
    symbol: "C$",
    code: "CAD",
  },
];

// Derived from above to get a map
export const currencyMap = new Map<string, Currency>();
currencyDetails.forEach((curr) => {
  currencyMap.set(curr.code.toLowerCase(), { ...curr });
});
