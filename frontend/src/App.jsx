import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChatProvider from "./Context/ChatProvider";// Assuming you're using this provider

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    try {
      setUserInfo(storedUserInfo ? JSON.parse(storedUserInfo) : null);
    } catch (error) {
      console.error("Failed to parse userInfo from localStorage:", error);
      setUserInfo(null);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Placeholder loading state
  }

  return (
    <ChatProvider>
      <div className="App">
        <Routes>
          {/* Redirect to Chatpage if user is logged in */}
          <Route path="/" element={userInfo ? <Navigate to="/chats" /> : <Homepage />} />
          {/* Redirect to Homepage if user is not logged in */}
          <Route path="/chats" element={userInfo ? <Chatpage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </ChatProvider>
  );
}

export default App;
