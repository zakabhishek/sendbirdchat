import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import { newMessageNotification } from './utils';
// import { GroupChannelHandler } from "sendbird";
import "sendbird-uikit/dist/index.css";
import SendBird from 'sendbird';

import "./index.css";

const APP_ID = "AE2B6399-227D-4D5A-8697-81162839EF31"
const USER_ID = "user1"
const Access_token = "43952c711a64bafc3a0021f4bafd772cb61126ee"

const sb = new SendBird({appId: APP_ID});

sb.connect(USER_ID,Access_token,(_user, error) => {
  if (error) {
    console.error(error);
  } else {
    const channelHandler = new sb.ChannelHandler();
    channelHandler.onMessageReceived = (channel, message) => {
      // if (message.profanity === true) {
      //   const notification = new Notification('Profanity Filter Alert', {
      //     body: 'A message containing profanity has been received',
      //   });
      // }
      if (this.channel.url === channel.url) {
           this.main.renderMessages([message], false);
            newMessageNotification();
            }
    };
    sb.addChannelHandler('unique_channel_handler_id', channelHandler);
  }
});



// function groupChannelHandler = new GroupChannelHandler();
//   groupChannelHandler.onMessageReceived = function (channel, message)
//   { 
//     if (this.channel.url === channel.url) {
//       this.main.renderMessages([message], false);
//       newMessageNotification();
//     }
//   }

//SendbirdApp.groupChannel.addGroupChannelHandler('UNIQUE_HANDLER_ID', groupChannelHandler);


export default function App() {
  return (
    <div className="App">
			<SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}
