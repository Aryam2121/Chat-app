import { Avatar, Tooltip, Spinner } from "@chakra-ui/react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages, loading }) => {
  const { user } = ChatState();

  if (loading) {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <ScrollableFeed>
      {messages && messages.length > 0 ? (
        messages.map((m, i) => (
          <div style={{ display: "flex", marginBottom: "10px" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={2}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0",
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? "3px" : "10px",
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
                wordBreak: "break-word",
              }}
              aria-label={`Message from ${m.sender.name}: ${m.content}`}
            >
              {m.content.length > 100
                ? `${m.content.substring(0, 100)}...`
                : m.content}
            </span>
          </div>
        ))
      ) : (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <p>No messages to display</p>
        </div>
      )}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
