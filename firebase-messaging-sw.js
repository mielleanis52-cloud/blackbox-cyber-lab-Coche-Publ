
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAEth-fLKlQI7ahJCoCxMHuScy2BmlT-no",
  authDomain: "blackbox-cyber-lab.firebaseapp.com",
  projectId: "blackbox-cyber-lab",
  storageBucket: "blackbox-cyber-lab.firebasestorage.app",
  messagingSenderId: "212579609436",
  appId: "1:212579609436:web:fac92ec416b20a4c00af99"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "BLACKBOX CYBER LAB";
  const options = {
    body: payload.notification?.body || "Tu as reçu un nouveau message !",
    icon: "./"
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("./")
  );
});
