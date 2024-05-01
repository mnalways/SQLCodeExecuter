import { dataSources as sources } from "../../../assets/Data.ts";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import SourceColumns from "./SourceColumns.tsx";

const LeftSourcePanel = () => {
  return (
    <div>
      <h1>Sources</h1>
      <Accordion defaultIndex={[0]} allowMultiple>
        {sources.map((source) => {
          return (
            <AccordionItem key={source.table_name}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {source.table_name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SourceColumns columns={source.columns} />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default LeftSourcePanel;
