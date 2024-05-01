import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Image,
  Box,
} from "@chakra-ui/react";
import chartImg from "./../../../assets/charts.png";

interface ChartConfigurationsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChartConfigurations = ({ onClose, isOpen }: ChartConfigurationsProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Charts</DrawerHeader>
        <DrawerBody>
          <Input placeholder="Search..." marginBottom={"32px"} />
          <Box boxSize="sm">
            <Image src={chartImg} alt="Dan Abramov" />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ChartConfigurations;
