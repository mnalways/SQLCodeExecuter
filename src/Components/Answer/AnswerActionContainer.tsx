import { Button } from "@chakra-ui/react";
import { IoIosSave } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import styles from "./Answer.module.scss";
import { useState } from "react";
import SaveModal from "./SaveModal";

interface Props {
  onSaveAnswer: (name: string, desc: string) => void;
  isSaveDisabled: boolean;
}

const AnswerActionContainer = ({ onSaveAnswer, isSaveDisabled }: Props) => {
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false);

  return (
    <>
      <SaveModal
        isOpen={isSaveModalVisible}
        onClose={() => setIsSaveModalVisible(false)}
        onSave={onSaveAnswer}
      />
      <div className={styles.titleActionContainer}>
        <div>Title of the Answer</div>
        <div>
          <Button
            rightIcon={<IoIosSave />}
            colorScheme="teal"
            variant="outline"
            onClick={() => setIsSaveModalVisible(true)}
            isDisabled={isSaveDisabled}
          >
            Save
          </Button>
          <Button
            rightIcon={<TiPin />}
            colorScheme="teal"
            variant="outline"
            marginLeft={"8px"}
          >
            Pin To Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};

export default AnswerActionContainer;
