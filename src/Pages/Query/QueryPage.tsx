import styles from "./QueryPage.module.scss";
import Answer from "../../Components/Answer/Answer.container";
import RightPanel from "./RightPanel/RightPanel";
import LeftSourcePanel from "./LeftPanel/LeftSourcePanel";
import SearchContainer from "./Search/SearchContainer";
import { useState } from "react";
import { history } from "../../assets/Data";

interface QueryPageProps {
  savedQuery?: string;
}

const QueryPage = ({ savedQuery = "" }: QueryPageProps) => {
  const [query, setQuery] = useState(savedQuery);
  const [queryHistory, setQueryHistory] = useState(history);
  const handleExecution = (searchText: string) => {
    if (searchText && searchText != query) {
      setQuery(searchText);
      setQueryHistory((prev) => [searchText, ...prev]);
    }
  };
  const handleClear = () => {
    setQuery("");
  };
  const onSelectQuery = (selectedQuery: string) => {
    setQuery(selectedQuery);
  };
  return (
    <div className={styles.queryPage}>
      <div className={styles.leftSourcePanel}>
        <LeftSourcePanel />
      </div>
      <div className={styles.queryAndResultContainer}>
        <div className={styles.searchContainer}>
          <SearchContainer
            onRun={handleExecution}
            onClear={handleClear}
            query={query}
          />
        </div>
        <div className={styles.answerAndRightPanelContainer}>
          <div className={styles.answerContainer}>
            <Answer query={query} />
          </div>
          <RightPanel
            queryHistory={queryHistory}
            onSelectQuery={onSelectQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default QueryPage;
