import Layout from "@components/Layout";
import ChatMessages from "@components/Chat/Messages";
import type { FC } from "react";

const Chat: FC = () => (
  <Layout>
    <ChatMessages />
  </Layout>
);

export default Chat;
