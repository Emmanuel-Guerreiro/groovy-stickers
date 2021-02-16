/*Esto se encarga de cargar imagenes en storage, junto a una lista
de metadatos personalizados*/

const fs = require("fs");
const path = require("path");

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
const prueba = datosImagenes(
  "/home/emma/Documents/proyecto-stickers/imagenes/CATALOGO/A"
);
console.log(prueba);
