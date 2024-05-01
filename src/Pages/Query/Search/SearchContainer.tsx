import { Button, Textarea } from "@chakra-ui/react";
import styles from "./SearchContainer.module.scss";
import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

interface SearchProps {
  onRun: (query: string) => void;
  onClear: () => void;
  query: string;
}

const SearchContainer = ({ onRun, onClear, query }: SearchProps) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (query) setSearchText(query);
  }, [query]);

  const handleRun = () => {
    if (!searchText) {
      setIsError(true);
      return;
    }
    setLoading(true);
    // adding 300ms delay just to show real data fetch
    setTimeout(() => setLoading(false), 300);
    onRun(searchText);
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!searchText) {
      setIsError(false);
    }
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    onClear();
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.textArea}>
        <Textarea
          textColor={"blue"}
          isInvalid={isError}
          placeholder="Here is a sample SQL Query: SELECT * FROM Students;"
          resize={"none"}
          value={searchText}
          onChange={onSearchTextChange}
        />
      </div>
      <div className={styles.actions}>
        <Button
          isLoading={loading}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={handleRun}
          width={"100%"}
        >
          Run
        </Button>
        <Button
          rightIcon={<RepeatIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={handleClear}
          width={"100%"}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SearchContainer;
