# Clase: Implementación y Mejora de Portafolio de Proyectos

## 1. Conceptos Básicos

### Dominio
Un dominio es la dirección única que identifica un sitio web en Internet.

#### Tipos de dominios
- **De pago**: Registrados con empresas como Namecheap, GoDaddy. Ejemplo: `tusitio.com`
- **Gratuitos**: Ofrecidos por plataformas como GitHub Pages, Netlify (ej. `tusitio.netlify.app`).

### Hosting
Un servicio que permite almacenar y servir un sitio web a los usuarios en Internet.

#### Tipos de hosting
- **Compartido**: Más económico, ideal para proyectos pequeños.
- **Servidor dedicado**: Costoso, recomendado para proyectos con alto tráfico.
- **Cloud Hosting**: Flexible, escalable (AWS, Google Cloud).
- **Gratuito**: Netlify, GitHub Pages, ideal para proyectos personales y portafolios.

### Netlify
Netlify es un servicio de hosting gratuito para proyectos web que soporta despliegues automáticos desde GitHub. Es ideal para subir proyectos de frontend y fullstack.

## 2. Exercise: Mejorando Nuestro Portafolio

Nuestros portafolios deben reflejar nuestra capacidad profesional. A continuación, se describen los pasos para seleccionar, depurar y mejorar los proyectos en nuestro portafolio.

### Selección de proyectos
Para elegir qué proyectos mostrar:
1. **Calidad del código**: Escoge proyectos que reflejen tus mejores prácticas.
2. **Relevancia**: Proyectos que se relacionen con el tipo de trabajo que deseas hacer.
3. **Innovación**: Selecciona proyectos que demuestren habilidades únicas.

### Pasos de revisión del proyecto

| Paso                | Descripción                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------|
| **Depuración**      | Localizar y resolver errores en el código.                                                        |
| **Retroalimentación** | Pedir feedback a compañeros e instructores sobre mejoras y optimización del proyecto.             |
| **Ajustes finales** | Realizar ajustes para asegurar que el proyecto esté listo para presentación en el portafolio.     |

#### Tipos de errores a corregir:
- **Errores de sintaxis**: Errores en la estructura del código.
- **Errores lógicos**: El código se ejecuta pero no produce el resultado esperado.
- **Errores de compilación**: Problemas al compilar o ejecutar el código.
- **Errores de recursos**: Recursos faltantes o mal referenciados (imágenes, archivos).
- **Errores de interfaz**: Problemas de usabilidad o diseño en la interfaz de usuario.

### Retroalimentación
La retroalimentación permite identificar mejoras en el código y evitar futuros errores. Fuentes comunes:
- **Mensajes de error**: Proveen información técnica específica.
- **Comentarios de compañeros o instructores**: Visión externa sobre la funcionalidad y usabilidad.

> **Consejo**: Acepta feedback de manera abierta y busca mejorar con base en las recomendaciones.

## 3. Subida de Proyectos a Netlify

Sigue estos pasos para desplegar un proyecto en Netlify:

1. **Seleccionar un proyecto** en tu repositorio de GitHub.
2. **Conectar Netlify** a tu repositorio:
   - Accede a [netlify.com](https://www.netlify.com/).
   - Inicia sesión y selecciona **New site from Git**.
   - Autoriza Netlify para que acceda a tu cuenta de GitHub.
3. **Configurar despliegue**:
   - Selecciona el proyecto.
   - Configura opciones de despliegue (branch a desplegar, comandos de build si aplican).
   - Netlify asignará un dominio gratuito (por ejemplo, `tusitio.netlify.app`).
4. **Personalizar dominio (opcional)**:
   - Puedes cambiar el nombre del subdominio gratuito o agregar un dominio personalizado.

## 4. Evaluación y Cierre del Proyecto

Asegúrate de que el proyecto esté libre de errores y completamente funcional antes de añadirlo al portafolio.

- **Depuración final**: Última revisión de errores.
- **Documentación**: Agregar descripciones y detalles sobre la funcionalidad del proyecto.
- **Publicación en portafolio**: Comparte el enlace del proyecto alojado en Netlify en tu portafolio.

--
-- 
¡Claro! Aquí te muestro algunos conceptos adicionales, ventajas de Netlify, y un ejemplo de código para configurar un proyecto antes de subirlo a un repositorio Git.

---

## Introducción a Netlify: 

Netlify es una plataforma moderna de despliegue web que proporciona un hosting rápido y confiable, ideal para desarrolladores y proyectos de frontend. A continuación, se detallan algunas de sus principales ventajas y conceptos clave.

### Ventajas de Netlify

1. **Despliegue continuo**: Netlify permite el despliegue automático cada vez que realizas un cambio en el repositorio conectado, asegurando que tu sitio esté siempre actualizado.
2. **Dominio gratuito**: Al desplegar en Netlify, obtienes un dominio personalizado en formato `tusitio.netlify.app` que puedes personalizar o reemplazar con un dominio propio.
3. **SSL automático**: Netlify incluye certificados SSL gratuitos, garantizando que el sitio funcione con HTTPS.
4. **Backend serverless**: Ofrece funciones serverless integradas, ideales para agregar funcionalidades de backend sin necesidad de un servidor dedicado.
5. **Optimización de recursos**: Netlify optimiza la carga y el rendimiento del sitio automáticamente, mejorando la velocidad y la experiencia del usuario.

### Conceptos Técnicos de Netlify

- **Funciones serverless**: Permiten ejecutar código en el backend sin administrar un servidor. Estas funciones se pueden escribir en Node.js y se despliegan automáticamente en Netlify.
- **Redirects y Rewrites**: Permiten redirigir URLs o reescribir rutas, lo cual es útil para crear aplicaciones de una sola página (SPA).
- **Build Commands**: Comandos específicos para construir el proyecto (p. ej., `npm run build` para aplicaciones con React o Vue).
- **Variables de entorno**: Netlify permite definir variables para almacenar información sensible y configurar el entorno de producción.

---

## Ejemplo de Configuración y Código de Implementación

### Paquetes Necesarios

Para configurar un proyecto Node.js y Express en Netlify, instala los siguientes paquetes:

1. **`express`** - Framework para crear y gestionar rutas en tu servidor.
2. **`serverless-http`** - Para habilitar tu servidor Express como una función serverless en Netlify.

```bash
npm install express serverless-http
```

### Estructura de Archivos para Netlify

Organiza los archivos en la estructura recomendada para que Netlify pueda reconocer el frontend y las funciones del backend:

```
/mi-proyecto
├── functions
│   └── server.js              # Tu aplicación Express configurada para serverless
├── public
│   └── index.html             # Archivo HTML de frontend
├── netlify.toml               # Configuración de Netlify
├── package.json
```

### Código para `server.js` en `/functions`

Este archivo convierte la aplicación Express en una función serverless:

```javascript
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir la interfaz de carga de archivos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Ruta para cargar archivos
app.post('/upload', (req, res) => {
  const fileContent = req.body.fileContent;
  const filePath = path.join(__dirname, '../uploads', 'archivo.txt');

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al guardar el archivo' });
    }
    res.status(200).json({ message: 'Archivo guardado con éxito' });
  });
});

// Configurar la aplicación para exportarse como serverless
module.exports.handler = serverless(app);
```

### Archivo `netlify.toml`

El archivo `netlify.toml` especifica las configuraciones para desplegar la aplicación en Netlify:

```toml
[build]
  functions = "functions"     # Carpeta que contiene las funciones serverless
  publish = "public"          # Carpeta con archivos estáticos (frontend)

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Preparación para subir el proyecto a Git y Netlify

1. **Inicializa un repositorio Git**:
   ```bash
   git init
   git add .
   git commit -m "Proyecto configurado para Netlify"
   ```

2. **Sube tu proyecto a GitHub** (o cualquier otra plataforma de repositorios):
   ```bash
   git remote add origin <URL-de-tu-repositorio>
   git push -u origin main
   ```

3. **Sube el proyecto a Netlify**:
   - Conéctate a [Netlify](https://www.netlify.com/) y selecciona **New site from Git**.
   - Autoriza a Netlify para acceder a tu cuenta de GitHub y selecciona el repositorio.
   - Confirma la configuración del build (Netlify debería detectar automáticamente el archivo `netlify.toml`).
   - Luego del despliegue, obtendrás el enlace para acceder a tu aplicación.

--- 