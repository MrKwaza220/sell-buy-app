import React from "react";
import "./Messages.css";

const Message = () => {
  return (
    <section id="userMessages">
      <h2>Messages</h2>
      <div className="usersChats">
        <div className="search_chats">

          <input type="text" className="search-input" placeholder="Search" />
          <div className="search-icon">
            <img src="search.png" alt="Search" />
          </div>
        </div>

          <div className="users_message">
            <div className="user_chat">
              <h3>Username</h3>
              <div className="activity">
                <p>Typing...</p>
              </div>
            </div>

            <div className="user_chat">
              <h3>Username</h3>
              <div className="activity">
              <p>Typing...</p>
              </div>
            </div>

            <div className="user_chat">
              <h3>Username</h3>
              <div className="activity">
              <p>Typing...</p>
              </div>
            </div>

            <div className="user_chat">
              <h3>Username</h3>
              <div className="activity">
              <p>Typing...</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
export default Message;
