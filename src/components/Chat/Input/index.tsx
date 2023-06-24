import "./index.css";
import type { FC } from "react";

const ChatInput: FC = () => {
  return (
    <div className="chat-input__container">
      <div
        contentEditable
        className="chat-input"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.currentTarget.innerHTML = "";
          }
        }}
      />
    </div>
  );
};

export default ChatInput;
