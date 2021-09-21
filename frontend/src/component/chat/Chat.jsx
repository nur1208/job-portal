import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./chat.css";
import { ChatEngineWrapper } from "./chatSC";
import { ChatFeed } from "./components/ChatFeed";

export const Chat = () => {
  return (
    <ChatEngineWrapper id="ChatEngineWrapper">
      <ChatEngine
        height="100vh"
        projectID="28b25b90-a10d-4e5a-8c23-74f7889769ff"
        userName="nur" /*{localStorage.getItem("username")}*/
        userSecret="12341234" /*{localStorage.getItem("password")}*/
        renderChatFeed={(chatAppProps) => (
          <ChatFeed {...chatAppProps} />
        )}
        renderPeopleSettings={(creds, chat) => {}}
        // is_direct_chat={true}
        // renderChatList={null}
      />
    </ChatEngineWrapper>
  );
};
