import { Box, Spinner, Text } from "@chakra-ui/react"; // Import Spinner and Text from Chakra UI
import { useState, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch user operation
    const fetchUser = async () => {
      try {
        // Simulate an API call to fetch user info
        // Replace this with your actual fetching logic
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) {
          throw new Error("User not found");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {/* Render SideDrawer if user exists */}
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {/* Loading state */}
        {loading ? (
          <Spinner size="xl" />
        ) : user ? (
          <>
            <MyChats fetchAgain={fetchAgain} />
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </>
        ) : (
          <Text>Please log in to access the chat.</Text>
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
