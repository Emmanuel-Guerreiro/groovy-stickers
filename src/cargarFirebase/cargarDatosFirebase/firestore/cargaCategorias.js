/*Correr este y cargarStickers.js desde NodeJS, para hacerlo
de manera controlada*/

/*TODO: Tener en cuenta que en produccion hay que acomodar tanto los
datos de inicializacion de firestore como la referencia de carpeta de
la funcion linksImagenes*/
//TODO: ver si la funcion de conseguir los links puede usar async await

var firebase = require("firebase/app");
require("firebase/storage");
require("firebase/firestore");

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

//funcion encargada de cargar datos en firestore
const cargarDatos = (
  nombre = "nombreFallado",
  categoria = "categoriaFallada",
  link,
  descripcion = "",
  alt = ""
) => {
  const db = app.firestore();
  db.collection("categorias")
    .doc(nombre)
    .set({
      nombre: nombre,
      categoria: categoria,
      link: link,
      descripcion: descripcion,
      alt: alt,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      carousel: false,
    })
    .then(console.log("Se cargo exitosamente:", nombre))
    .catch((error) => {
      console.log("Error porque:", error);
    });
};

//funcion encargada de conseguir los links y poner en el

//funcion encargada de conseguir los links de las imagenes
const linksImagenes = async (coleccion) => {
  //coleccion: PARAMETRO - es de donde voy a sacar los stickers
  const arrayLinks = [];
  const storage = app.storage();
  const referenciaCarpeta = storage.refFromURL(
    `gs://implementacion1.appspot.com/${coleccion}`
  );
  referenciaCarpeta.listAll().then((imagenesObtenidas) => {
    imagenesObtenidas.items.forEach((imageRef) => {
      imageRef.getDownloadURL().then((url) => {
        arrayLinks.push(url);
      });
    });
  });

  return arrayLinks;
};
