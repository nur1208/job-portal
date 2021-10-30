import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import "./chat.css";
import { ChatEngineWrapper } from "./chatSC";
import { ChatFeed } from "./components/ChatFeed";
import apiList, { CHAT_PROJECT_ID } from "../../lib/apiList";
import { userType } from "../../lib/isAuth";

export const Chat = () => {
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data } = await axios(`${apiList.user}`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     // TODO clean up the following code
  //     if (userType() === "recruiter") {
  //       const { name, _id } = data.recruiter;
  //       const lastFourDight = _id.substr(_id.length - 4);
  //       const username = `${name}${lastFourDight}`;
  //       setUsername(username);
  //     } else {
  //       const { name, _id } = data.jobApplicant;
  //       const lastFourDight = _id.substr(_id.length - 4);
  //       const username = `${name}${lastFourDight}`;
  //       setUsername(username);
  //     }
  //   };

  //   getUser();
  // }, []);
  return (
    <ChatEngineWrapper id="ChatEngineWrapper">
      {localStorage.getItem("usernameChatEngine") && (
        <ChatEngine
          height="89vh"
          projectID={CHAT_PROJECT_ID}
          userName={localStorage.getItem("usernameChatEngine")}
          userSecret="12341234"
          renderChatFeed={(chatAppProps) => (
            <ChatFeed {...chatAppProps} />
          )}
          renderPeopleSettings={(creds, chat) => {}}
          // is_direct_chat={true}
          // renderChatList={null}
        />
      )}
    </ChatEngineWrapper>
  );
};
