import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import SendBird from 'sendbird';
import "./index.css";

const APP_ID = "-"
const USER_ID = "user1"
const Access_token = "-"
const sb = new SendBird({appId: APP_ID});

//initialize sendbird chat
sb.connect(USER_ID,Access_token,(_user, error) => {
  if (error) {
    console.error(error);
  } else {
    const channelHandler = new sb.ChannelHandler();
    channelHandler.onMessageReceived = (channel, message) => {
   
//logic to fire browser notification  
let permission = Notification.permission;
if(permission === "granted") {
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}
function showNotification() {
   if(document.visibilityState === "visible") {
       return;
   }
   var title = "Profanity Filter";
   var icon = "/Users/gandalf/Documents/sendbirdchat/src/icon.png"
   var body = "Message recived by filter";
   var notification = new Notification({ title, body, icon });
   notification.onclick = () => { 
          notification.close();
          window.parent.focus();
   }
}
function requestAndShowPermission() {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}
      
    };
    sb.addChannelHandler('unique_channel_handler_id', channelHandler);
  }
});






export default function App() {
  return (
    <div className="App">
			<SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}
