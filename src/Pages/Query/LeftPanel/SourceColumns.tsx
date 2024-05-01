import { Columns } from "../../../assets/Data";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

interface AccordionItemProps {
  title: string;
  items: string[];
  color: string;
}

interface SourceColumnsProps {
  columns: Columns;
}

// Component to render a list of items with different colors
const ItemList: React.FC<{ items: string[]; color: string }> = ({
  items,
  color,
}) => {
  return (
    <ul style={{ color }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Component to render an accordion item
const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  title,
  items,
  color,
}) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <ItemList items={items} color={color} />
      </AccordionPanel>
    </AccordionItem>
  );
};

const SourceColumns: React.FC<SourceColumnsProps> = ({ columns }) => {
  const { attributes, measures, dates } = columns;

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {attributes.length > 0 && (
        <AccordionItemComponent
          title="Attributes"
          items={attributes}
          color="#38a169"
        />
      )}
      {measures.length > 0 && (
        <AccordionItemComponent
          title="Measures"
          items={measures}
          color="#805ad5"
        />
      )}
      {dates.length > 0 && (
        <AccordionItemComponent title="Dates" items={dates} color="#3182ce" />
      )}
    </Accordion>
  );
};

export default SourceColumns;
