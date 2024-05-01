import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavItem,
  NavToPath,
  pathToNav,
  savedAnswerPathExpression,
} from "./Nav.const";

const Navbar = () => {
  const [tabIndex, setTabIndex] = useState(NavItem.HOME);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryIdRegex = savedAnswerPathExpression;
    if (queryIdRegex.test(location.pathname)) setTabIndex(NavItem.QUERY);
    else setTabIndex(pathToNav[location.pathname]);
  }, [location.pathname]);

  const handleTabsChange = (index: NavItem) => {
    navigate(NavToPath[index]);
    setTabIndex(index);
  };

  return (
    <Tabs
      index={tabIndex}
      onChange={handleTabsChange}
      bg="#30363b"
      textColor={"lightgrey"}
      colorScheme="green"
      size={"lg"}
    >
      <TabList>
        <Tab>Home</Tab>
        <Tab>Query</Tab>
        <Tab>Answers</Tab>
        <Tab>Dashboards</Tab>
      </TabList>
    </Tabs>
  );
};

export default Navbar;
