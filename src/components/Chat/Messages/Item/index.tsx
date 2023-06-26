import "./index.css";
import { FC } from "react";
import { auth } from "@configs/firebase.ts";
import useConversations from "@hooks/useConversations.ts";
import { useParams } from "react-router-dom";
import { profileImageUrl } from "@utils/image.ts";

const MessageItem: FC<IMessage> = (props) => {
  const { id: conversationId } = useParams();
  const { uid } = auth.currentUser || {};
  const isSelf = uid === props.uid;
  const conversations = useConversations();
  const participants =
    conversations.find((conv) => conv.id === conversationId)?.participants ||
    [];
  const sender = participants.find(({ uid }) => uid === props.uid);
  const senderName = props.name || sender?.title;
  const avatar = props.avatar || profileImageUrl(sender?.uid);
  const showSenderInfo = participants.length > 2 && !isSelf;
  return (
    <div
      className={`message__container ${
        isSelf ? "message__container--self" : ""
      }`}
    >
      {showSenderInfo ? (
        <img className="message__avatar" src={avatar} alt={senderName} />
      ) : null}
      <div className={`message ${isSelf ? "message--self" : ""}`}>
        {showSenderInfo ? (
          <div className="message__sender">{senderName}</div>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </div>
    </div>
  );
};

export default MessageItem;
