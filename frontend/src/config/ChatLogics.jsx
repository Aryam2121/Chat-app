// Check if the current message is the same sender as the next one and adjust margin accordingly
export const isSameSenderMargin = (messages, m, i, userId) => {
  if (!Array.isArray(messages) || !m || !m.sender) return 0;

  const isNextSenderSame = i < messages.length - 1 && messages[i + 1].sender._id === m.sender._id;
  const isCurrentSenderDifferent = m.sender._id !== userId;

  if (isNextSenderSame && isCurrentSenderDifferent) return 33; // Add margin if next sender is the same
  if (i < messages.length - 1 && messages[i + 1].sender._id !== m.sender._id && isCurrentSenderDifferent) {
    return 0; // No margin if current sender is different and not the last message
  }
  if (i === messages.length - 1 && isCurrentSenderDifferent) return 0; // No margin if it's the last message from a different sender

  return "auto"; // Default case
};

// Check if the current message is from a different sender than the next message
export const isSameSender = (messages, m, i, userId) => {
  if (!Array.isArray(messages) || !m || !m.sender) return false;

  return (
    i < messages.length - 1 &&
    messages[i + 1].sender._id !== m.sender._id &&
    messages[i].sender._id !== userId
  );
};

// Check if the current message is the last one and not sent by the current user
export const isLastMessage = (messages, i, userId) => {
  if (!Array.isArray(messages) || messages.length === 0) return false;

  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId
  );
};

// Check if the previous message was sent by the same user
export const isSameUser = (messages, m, i) => {
  if (!Array.isArray(messages) || !m || !m.sender) return false;

  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

// Get the sender's name based on the logged-in user
export const getSender = (loggedUser, users) => {
  if (!Array.isArray(users) || users.length < 2) return null;

  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

// Get the full user object of the sender based on the logged-in user
export const getSenderFull = (loggedUser, users) => {
  if (!Array.isArray(users) || users.length < 2) return null;

  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
