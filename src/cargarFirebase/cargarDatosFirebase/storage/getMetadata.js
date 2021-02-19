var firebase = require("firebase/app");
require("firebase/storage");
require("firebase/firestore");

const app = firebase.initializeApp({
  projectId: "implementacion1",
  appId: "1:162537327702:web:be673fafbb73d0dbcafff7",
  storageBucket: "implementacion1.appspot.com",
  locationId: "southamerica-east1",
  apiKey: "AIzaSyCc8BXgyMHKyiJNzKXnSNORfJ4-RN5RFDE",
  authDomain: "implementacion1.firebaseapp.com",
  messagingSenderId: "162537327702",
});

const storage = app.storage().ref();
const imagenRef = storage.child("A");

imagenRef.listAll().then((imagenes) => {
  imagenes.items.forEach((imagen) => {
    imagen.getMetadata().then((metadata) => {
      console.log(metadata);
    });
  });
});
