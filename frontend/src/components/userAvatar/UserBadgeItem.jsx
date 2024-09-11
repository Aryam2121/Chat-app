import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme={admin === user._id ? "blue" : "purple"}
      cursor="pointer"
      onClick={handleFunction}
      aria-label={`Remove ${user.name} from group`}
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} onClick={handleFunction} cursor="pointer" aria-label={`Remove ${user.name}`} />
    </Badge>
  );
};

export default UserBadgeItem;
