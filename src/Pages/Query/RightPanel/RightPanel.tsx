import { DownloadIcon, Icon } from "@chakra-ui/icons";
import styles from "../QueryPage.module.scss";
import { IoBarChart } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import History from "./History";
import { useState } from "react";
import ChartConfigurations from "./ChartConfigurations";
import ChartSettings from "./ChartSettings";
import { CSVLink } from "react-csv";
import { customerTable } from "../../../assets/Data";

interface RightPanelProps {
  queryHistory: string[];
  onSelectQuery: (query: string) => void;
}
const RightPanel = ({ queryHistory, onSelectQuery }: RightPanelProps) => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [isChartConfigVisible, setIsChartConfigVisible] = useState(false);
  const [isChartSettingsVisible, setIsChartSettingsVisible] = useState(false);

  const onQueryClickHandler = (selectedQuery: string) => {
    setIsHistoryVisible(false);
    onSelectQuery(selectedQuery);
  };
  return (
    <>
      <History
        isOpen={isHistoryVisible}
        onClose={() => setIsHistoryVisible(false)}
        queryHistory={queryHistory}
        onSelectQuery={(selectedQuery) => onQueryClickHandler(selectedQuery)}
      />
      <ChartConfigurations
        isOpen={isChartConfigVisible}
        onClose={() => setIsChartConfigVisible(false)}
      />
      <ChartSettings
        isOpen={isChartSettingsVisible}
        onClose={() => setIsChartSettingsVisible(false)}
      />
      <div className={styles.rightPanel}>
        {/* charts */}
        <div
          className={styles.actionIcons}
          onClick={() => setIsChartConfigVisible(true)}
        >
          <Icon as={IoBarChart} />
        </div>
        {/* Settings */}
        <div
          className={styles.actionIcons}
          onClick={() => setIsChartSettingsVisible(true)}
        >
          <Icon as={IoSettings} />
        </div>
        {/* Download */}
        <div className={styles.actionIcons}>
          <CSVLink data={customerTable} filename={"Customer.csv"}>
            <DownloadIcon />
          </CSVLink>
        </div>
        {/* Suggestions */}
        <div
          className={styles.actionIcons}
          onClick={() => setIsHistoryVisible(true)}
        >
          <Icon as={TbBulb} />
        </div>
        {/* History */}
        <div
          className={styles.actionIcons}
          onClick={() => setIsHistoryVisible(true)}
        >
          <Icon as={FaHistory} />
        </div>
      </div>
    </>
  );
};

export default RightPanel;
