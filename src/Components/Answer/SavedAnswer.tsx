/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { localStorageKeys } from "../../Utility/Constants";
import QueryPage from "../../Pages/Query/QueryPage";

const SavedAnswer = () => {
  const { id } = useParams();
  const { getItem } = useLocalStorage();
  const savedAnswers = getItem(localStorageKeys.SAVED_ANSWERS);
  const savedAnswer = savedAnswers?.find((answer: any) => answer.id == id);
  const savedQuery = savedAnswer.queryValue;
  return <QueryPage savedQuery={savedQuery} />;
};

export default SavedAnswer;
