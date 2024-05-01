/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Props {
  list: any[];
  onClick: (id: number) => void;
}
const ListComponent = ({ list, onClick }: Props) => {
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption></TableCaption>
          <Thead position="sticky" top={0}>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>created</Th>
              <Th>DataSource</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((row) => {
              return (
                <Tr key={row.id}>
                  <Td onClick={() => onClick(row.id)} cursor={"pointer"}>
                    {row.name}
                  </Td>
                  <Td>{row.description || "--"}</Td>
                  <Td>{row.created}</Td>
                  <Td>{row.dataSource}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListComponent;
