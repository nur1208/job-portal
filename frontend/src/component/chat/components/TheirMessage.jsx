import React from "react";

export const TheirMessage = ({ lastMessage, message }) => {
  const isFistMessageByUser =
    !lastMessage ||
    lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFistMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: `url(${message?.sender?.avatar})`,
          }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          style={{
            marginLeft: isFistMessageByUser ? "4px" : "48px",
          }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFistMessageByUser ? "4px" : "48px",
          }}
          dangerouslySetInnerHTML={{ __html: message.text }}
        >
          {/* {message.text} */}
        </div>
      )}
    </div>
  );
};
