/* eslint-disable @typescript-eslint/no-explicit-any */
export const useLocalStorage = () => {
  const getItem = (key: string) => {
    const unparsedValue = localStorage.getItem(key);
    let values = null;
    if (unparsedValue) {
      values = JSON.parse(unparsedValue);
    }
    return values;
  };
  const setItem = (key: string, values: any) => {
    localStorage.setItem(key, JSON.stringify(values));
  };
  return { setItem, getItem };
};
