import styles from "./Answer.module.scss";
import Visualization from "./Visualization";
import EmptyAnswerContainer from "./EmptyAnswerContainer";
import AnswerActionContainer from "./AnswerActionContainer";
import { savedAnswers } from "../../assets/Data";
import { generateID } from "../../Utility/utility";
import { localStorageKeys } from "../../Utility/Constants";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { getCurrentDate } from "./Answer.util";

interface AnswerProps {
  query: string;
}

const Answer = ({ query }: AnswerProps) => {
  const { setItem, getItem } = useLocalStorage();
  const onSaveAnswer = (name: string, desc: string) => {
    const answers = getItem(localStorageKeys.SAVED_ANSWERS) || savedAnswers;
    const newAnswer = {
      id: generateID(),
      name: name,
      description: desc || "",
      queryValue: query,
      created: getCurrentDate(),
      dataSource: "Customer",
    };
    answers.unshift(newAnswer);
    setItem(localStorageKeys.SAVED_ANSWERS, answers);
  };

  return (
    <div className={styles.answer}>
      <AnswerActionContainer
        onSaveAnswer={onSaveAnswer}
        isSaveDisabled={!query}
      />
      <div className={styles.visualizationContainer}>
        {query ? <Visualization /> : <EmptyAnswerContainer />}
      </div>
    </div>
  );
};

export default Answer;
