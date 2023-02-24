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
   var title = "JavaScript Jeep";
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