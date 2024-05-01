import { customerTable } from "../assets/Data";

export const getTableData = async (skip: number, offset: number) => {
  return new Promise((resolve) => {
    if (skip >= customerTable.length) {
      return resolve({ data: [], max: customerTable.length });
    }
    const maxDataIndex =
      skip + offset < customerTable.length
        ? skip + offset
        : customerTable.length;
    const dataChunk = customerTable.slice(skip, maxDataIndex);
    setTimeout(() => {
      resolve({ data: dataChunk, max: customerTable.length });
    }, 500);
  });
};
