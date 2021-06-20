import React from 'react';
import IsMe from './IsMe';
import Others from './Others';

export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Others />;
}
