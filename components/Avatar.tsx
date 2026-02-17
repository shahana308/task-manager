import { Avatar as AntdAvatar } from "antd";
import { getInitials, getAvatarColor } from "@/lib/avatarColors";
import { Assignee } from "@/lib/types";

const Avatar = ({ assignee }: { assignee: Assignee }) => {
  if (assignee.avatar) {
    return (
      <AntdAvatar
        src={assignee.avatar}
        size={28}
        alt={assignee.name}
      />
    );
  }

  return (
    <AntdAvatar
      size={24}
      style={{
        backgroundColor: getAvatarColor(assignee.name),
        color: "#374151",
        fontSize: "10px",
        fontWeight: 600,
      }}
    >
      {getInitials(assignee.name)}
    </AntdAvatar>
  );
};

export default  Avatar;