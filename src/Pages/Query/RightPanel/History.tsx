import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

interface HistoryProps {
  isOpen: boolean;
  onClose: () => void;
  queryHistory: string[];
  onSelectQuery: (query: string) => void;
}

const History = ({
  onClose,
  isOpen,
  queryHistory,
  onSelectQuery,
}: HistoryProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>History</DrawerHeader>
        <DrawerBody>
          <Input placeholder="Search..." marginBottom={"32px"} />
          <List spacing={3} cursor={"pointer"}>
            {queryHistory.map((query, index) => {
              return (
                <ListItem key={index} onClick={() => onSelectQuery(query)}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {query}
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default History;
