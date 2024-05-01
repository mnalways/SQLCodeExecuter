import { localStorageKeys } from "../../Utility/Constants";
import { savedAnswers } from "../../assets/Data";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import ListComponent from "./ListComponent";
import { useNavigate } from "react-router-dom";

const AnswerList = () => {
  const { getItem, setItem } = useLocalStorage();
  const navigate = useNavigate();

  const onClickAnswer = (id: number) => {
    navigate(`/query/${id}`);
  };

  let answersList = getItem(localStorageKeys.SAVED_ANSWERS);
  if (!answersList) {
    answersList = savedAnswers;
    setItem(localStorageKeys.SAVED_ANSWERS, answersList);
  }
  return <ListComponent list={answersList} onClick={onClickAnswer} />;
};

export default AnswerList;
