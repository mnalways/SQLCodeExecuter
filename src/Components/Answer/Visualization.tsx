/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import styles from "./Visualization.module.scss";
import { Table, Thead, Tr, Tbody, Box, Spinner } from "@chakra-ui/react";
import {
  OFFSET,
  getData,
  getTableHead,
  getTableRows,
} from "./Visualization.util";

const Visualization = () => {
  const [last, setLast] = useState(0);
  const [tableData, setTableData] = useState<any[]>([]);
  const [max, setMax] = useState(0);
  const [loading, setLoading] = useState(false);
  const ref = useRef<IntersectionObserver | null>(null);

  const postDataFetch = (response: any) => {
    if (!response) return;
    setTableData((prev) => [...prev, ...response.data]);
    setLast((prev) => prev + OFFSET);
    setMax(response.max);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData(last, OFFSET, postDataFetch);
  }, []);

  ref.current = new IntersectionObserver((entries) => {
    if (max <= tableData.length && ref.current) {
      ref.current.unobserve(entries[0].target);
      return;
    }
    if (entries[0]?.isIntersecting && !loading && ref.current) {
      setLoading(true);
      getData(last, OFFSET, postDataFetch);
      ref.current.unobserve(entries[0].target);
    }
  });

  const addRef = (node: HTMLTableRowElement | null) => {
    if (node && ref.current) {
      ref.current.observe(node);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <Box overflowY="auto" maxHeight="700px">
        <Table variant="simple">
          <Thead position="sticky" top={0} bgColor="lightgrey">
            <Tr>{getTableHead(tableData)}</Tr>
          </Thead>
          <Tbody overflowY="scroll">{getTableRows(tableData, addRef)}</Tbody>
        </Table>
      </Box>
      <div className={styles.loader}>{loading && <Spinner />}</div>
    </div>
  );
};

export default Visualization;
