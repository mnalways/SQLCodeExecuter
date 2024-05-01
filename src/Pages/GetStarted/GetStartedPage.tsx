import backImg from "./../../assets/background.jpg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NavItem, NavToPath } from "../../Components/Navigation/Nav.const";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate(NavToPath[NavItem.QUERY]);
  };
  return (
    <Box
      bgImage={`url(${backImg})`}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      w="100%"
      borderRadius={"6px"}
    >
      <Flex
        h="65%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        w="70%"
        mx="auto"
      >
        <Box textAlign="center">
          <Text fontSize="2xl" color="teal.600">
            Welcome to SQL Wizard - Your Ultimate SQL Query Executor!
          </Text>
          <Text fontSize="lg" color="teal.400" mt={4}>
            Easily Execute and Refine Your SQL Queries with SQL Wizard.
            Streamline Your Database Operations and Boost Your Productivity. Get
            Ready to Dive into the World of Efficient SQL Querying!
          </Text>
        </Box>

        <Button
          colorScheme="teal"
          size="lg"
          borderRadius={"30px"}
          padding={"30px"}
          fontSize={"x-large"}
          fontFamily={"sans-serif"}
          borderColor="dark"
          onClick={handleGetStarted}
          width={"300px"}
          marginTop={"20px"}
        >
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default GetStartedPage;
