 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: "AIzaSyAVJCTyI6yvyFIkbEH-Wb4uEyMqPimzvL0",
    authDomain: "blogging-website-ed33d.firebaseapp.com",
    projectId: "blogging-website-ed33d",
    storageBucket: "blogging-website-ed33d.appspot.com",
    messagingSenderId: "281250162416",
    appId: "1:281250162416:web:afed92fda06f38e2124435",
    measurementId: "G-D1KWH77N7E"
  };

  // Initialize Firebase

  let app = initializeApp(firebaseConfig);
  let analytics = getAnalytics(app);
 
 