import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSuccess = () => {
    setLoading(false);
    navigate("/chats");
  };

  const handleSignupSuccess = () => {
    setLoading(false);
    navigate("/chats");
  };

  const handleError = (message) => {
    setLoading(false);
    setErrorMessage(message);
  };

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {loading ? (
                <Spinner />
              ) : (
                <Login 
                  onLoginSuccess={handleLoginSuccess}
                  onError={handleError} // Assuming Login has an onError prop
                />
              )}
            </TabPanel>
            <TabPanel>
              {loading ? (
                <Spinner />
              ) : (
                <Signup 
                  onSignupSuccess={handleSignupSuccess}
                  onError={handleError} // Assuming Signup has an onError prop
                />
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
        {errorMessage && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
      </Box>
    </Container>
  );
}

export default Homepage;
