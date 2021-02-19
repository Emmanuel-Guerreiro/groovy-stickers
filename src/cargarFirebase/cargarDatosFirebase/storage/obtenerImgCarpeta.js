/*Esto se encarga de cargar imagenes en storage, junto a una lista
de metadatos personalizados*/

//importo todos los modulos necesarios
var firebase = require("firebase/app");
require("firebase/storage");
require("firebase/firestore");

const fs = require("fs");
const path = require("path");

//Inicializo la app y defino una instancia de firestore y otra storage
const app = firebase.initializeApp({
  projectId: "implementacion1",
  appId: "1:162537327702:web:be673fafbb73d0dbcafff7",
  storageBucket: "implementacion1.appspot.com",
  locationId: "southamerica-east1",
  apiKey: "AIzaSyCc8BXgyMHKyiJNzKXnSNORfJ4-RN5RFDE",
  authDomain: "implementacion1.firebaseapp.com",
  messagingSenderId: "162537327702",
});

//Esta funcion consigue las imagenes de una carpeta y las prepara
const datosImagenes = (folder) => {
  /*Guarda las imagenes en un array de objetos. 
  Estos objetos tienen la forma: imagen = {nombre: , link:} */
  var arrayLinks = [];
  fs.readdirSync(folder).forEach((file) => {
    const objeto = {
      nombre: path.basename(file),
      link: path.resolve(folder, file),
    };
    arrayLinks.push(objeto);
  });
  return arrayLinks;
};

/*const cargarStorage = async (folder, imagen) => {
  const storageRef = firebase.storage().ref();
  const metadata = imagen.nombre;
  const cargar = await storageRef.child(folder).put(imagen.link, metadata);
};*/

const imagenes = datosImagenes(
  "/home/emma/Documents/proyecto-stickers/imagenes groovy optimizadas/c"
);

firebase
  .storage()
  .ref()
  .child("C")
  .put(
    "/home/emma/Documents/proyecto-stickers/imagenes groovy optimizadas/c/C1.jpg"
  );
