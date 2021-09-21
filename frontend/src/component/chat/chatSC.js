import styled from "styled-components";

const MAIN_COLOR = "#3f51b5";
const SECONDARY_COLOR = "#3f51b5a3";
export const ChatEngineWrapper = styled.div`
  button.ce-primary-button {
    background-color: ${MAIN_COLOR} !important;
  }

  div.ce-active-chat-card {
    background-color: ${SECONDARY_COLOR} !important;
    border: 4px solid ${SECONDARY_COLOR} !important;
    border-radius: 0px !important;
  }

  .ce-chat-unread-dot {
    background-color: ${MAIN_COLOR} !important;
  }

  .chat-title {
    color: ${MAIN_COLOR};
  }

  .chat-subtitle {
    display: none;
  }

  .message {
    background-color: ${SECONDARY_COLOR} !important;
  }
`;
