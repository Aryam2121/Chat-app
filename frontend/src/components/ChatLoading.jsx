import { Stack, Skeleton } from "@chakra-ui/react";

const ChatLoading = ({ count = 12, height = "45px" }) => {
  const skeletons = Array(count).fill(null); // Creates an array with a specified number of null elements

  return (
    <Stack spacing={4}>
      {skeletons.map((_, index) => (
        <Skeleton key={index} height={height} width="100%" />
      ))}
    </Stack>
  );
};

export default ChatLoading;
