import classNames from 'classnames';
import React from 'react';
import styles from './Message.module.css';

const Message = ({ avatar, name, message }) => {
  const isMyMessage = name === 'Iron-man';

  return (
    <li className={
      classNames(
        styles.Message, 
        {[styles.myMessage]: isMyMessage}
      )}
    >
      <img 
        src={avatar} 
        alt='User avatar' 
        className={styles.userAva}
      />

      <div 
        className={
          classNames(
            styles.userMessage,
            {[styles.myMessageText]: isMyMessage}
        )}
      >
        {message}
      </div>
    </li>
  );
};

export default Message;
