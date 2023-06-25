interface IUser {
  id: string;
  avatar: string;
  name: string;
}
interface IMessage {
  id: string;
  text: string;

  conversation_id: IConversation["id"];
  name: IUser["name"];
  avatar: IUser["avatar"];
  created_at: string;
  uid: IUser["id"];
}
interface IConversation {
  id: string;
  title: string;
  lastMessage: string;
  image: string;
  participant_ids: string[];
  participants: Array<{ title: string; uid: string }>;
}
