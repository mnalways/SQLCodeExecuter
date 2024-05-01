import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  Box,
} from "@chakra-ui/react";
import chartImg from "./../../../assets/ChartConfig.png";

interface ChartConfigurationsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChartSettings = ({ onClose, isOpen }: ChartConfigurationsProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Charts Edit Configuration</DrawerHeader>
        <DrawerBody>
          <Box boxSize="sm">
            <Image src={chartImg} alt="Dan Abramov" />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ChartSettings;
