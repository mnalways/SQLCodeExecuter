import styles from "./Answer.module.scss";
import { Icon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { IoBarChart } from "react-icons/io5";

const EmptyAnswerContainer = () => {
  return (
    <div className={styles.EmptyContainer}>
      <Icon as={IoBarChart} color={"lightgrey"} w={16} h={16} />
      <Text fontSize="xl" color={"lightgrey"}>
        Select columns from the data panel on the left side
      </Text>
      <Text fontSize="xl" color={"lightgray"}>
        to start exploring your data
      </Text>
    </div>
  );
};

export default EmptyAnswerContainer;
