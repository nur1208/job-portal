import React from "react";
import { MessageForm } from "./MessageForm";
import { MyMessage } from "./MyMessage";
import { TheirMessage } from "./TheirMessage";

export const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  // console.log({ chats, activeChat });
  const chat = chats && chats[activeChat];

  // console.log({ chat, userName, messages });

  const renderMessage = () => {
    // convert object keys to array
    // keys = array of object keys
    const keys = Object.keys(messages);

    console.log({ keys });
    // loop trough the array
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      console.log({ lastMessage });
      const isMyMessage = userName === message.sender.username;
      // console.log({
      //   userName,
      //   senderUserName: message.sender.username,
      //   isMyMessage,
      // });
      const renderReadReceipts = (message, isMyMessage) => {
        console.log({ people: chat.people, message });
        return chat.people.map(
          (person, index) =>
            person.last_read === message.id && (
              <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                  float: isMyMessage ? "right" : "left",

                  backgroundImage: `url(${person?.person?.avatar})`,
                }}
              />
            )
        );
      };

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessage]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "loading...";

  // Note - chat?.title means make sure that chat is exist
  // before accessing title
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map(
            (person) => `${person.person.username}`
          )}
        </div>
      </div>

      {renderMessage()}
      <div style={{ height: "100px" }}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};
