/* eslint-disable @typescript-eslint/no-explicit-any */
import { Th, Td, Tr } from "@chakra-ui/react";
import { getTableData } from "../../Service/TableDataService";

export const OFFSET = 20;
export const getData = async (
  last: number,
  offset: number,
  postDataFetch: (res: any) => void
) => {
  const response = await getTableData(last, offset);
  postDataFetch(response);
};

export const getTableHead = (tableData: any[]) => {
  if (!tableData || tableData.length == 0) {
    return null;
  }
  const keys = Object.keys(tableData[0]);
  return keys.map((key) => {
    return <Th key={key}>{key}</Th>;
  });
};

export const getRow = (row: any) => {
  if (!row) return null;
  const rowValues = [];
  for (const columnKey in row) {
    rowValues.push(<Td key={columnKey}>{row[columnKey]}</Td>);
  }
  return rowValues;
};

export const getTableRows = (tableData: any[], addRef: (ref: any) => void) => {
  if (!tableData || tableData.length == 0) {
    return null;
  }
  return tableData.map((row, index) => {
    if (index == tableData.length - 1) {
      return (
        <Tr ref={addRef} key={index}>
          {getRow(row)}
        </Tr>
      );
    }
    return <Tr key={index}>{getRow(row)}</Tr>;
  });
};
