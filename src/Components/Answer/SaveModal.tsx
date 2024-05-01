import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";

interface SaveAnswerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, desc: string) => void;
}

const SaveModal = ({ isOpen, onClose, onSave }: SaveAnswerProps) => {
  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const descRef = React.useRef<HTMLInputElement | null>(null);

  const onConfirm = () => {
    if (!nameRef.current || nameRef.current?.value?.length == 0) {
      return;
    }
    onSave(nameRef.current.value, descRef.current?.value || "");
    onClose();
  };
  return (
    <>
      <Modal
        initialFocusRef={nameRef}
        finalFocusRef={descRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Save your Answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Answer Name</FormLabel>
              <Input ref={nameRef} placeholder="Name of your Answer" required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input ref={descRef} placeholder="Description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onConfirm}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaveModal;
