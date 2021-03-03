import { app } from "../../../firebase/base";

const obtencionMetadata = async () => {
  var arrayAyuda = [];
  const storage = app.storage().ref();
  const imagenRef = storage.child("categorias");
  const db = app.firestore();

  imagenRef.listAll().then((imagenes) => {
    imagenes.items.forEach((imagen) => {
      imagen.getMetadata().then((metadata) => {
        const nombre = metadata.name;
        const nombreAdaptado = nombre.substring(0, nombre.length - 4);
        const categoria = nombre.substring(0, 1);

        const data = {
          nombre: nombreAdaptado,
          categoria: categoria,
          link: `gs://implementacion1.appspot.com/${metadata.fullPath}`,
          timeCreated: metadata.timeCreated,
          carousell: false,
          promocion: "no",
          home: "no",
          tipo: "categoria",
        };

        db.collection("categorias")
          .add(data)
          .then(() => {
            console.log(`agregado`);
          });
      });
    });
  });
  console.log(arrayAyuda);
  return arrayAyuda;
};

const cargaCloudFirestore = async () => {
  const datos = await obtencionMetadata();
  const db = app.firestore();
  var batch = db.batch();
  console.log("Por empezar");
  datos.forEach((datos) => {
    var datosRef = db.collection(datos.categoria);
    batch.add(datosRef, datos);
  });
  batch.commit().then(() => {
    console.log("TERMINE LA CARGA");
  });
};

export default cargaCloudFirestore;
