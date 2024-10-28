// functions/upload.js
const express = require('express');
const fs = require('fs');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Configuración para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '..','public')));

// Middleware para parsear el formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta POST para manejar la carga de archivos
app.post('/upload', (req, res) => {
  const fileData = req.body.file;

  if (!fileData) {
    return res.status(400).send('No se ha seleccionado ningún archivo.');
  }

  const fileName = `upload_${Date.now()}.txt`;
  const filePath = path.join(__dirname, '..', 'uploads', fileName);

  fs.writeFile(filePath, fileData, 'base64', (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
      return res.status(500).send('Error al guardar el archivo.');
    }
    res.send(`Archivo ${fileName} cargado exitosamente!`);
  });
});

//Exportar la función de Netlify
module.exports.handler = serverless(app);
