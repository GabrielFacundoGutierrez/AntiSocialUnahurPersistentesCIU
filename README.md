# 💻 UnahurAntiSocial

## 🖱️ Objetivo

El proyecto **UnahurAntiSocial** es una aplicación web desarrollada como red social académica donde los usuarios pueden registrarse, iniciar sesión, crear publicaciones con imágenes y etiquetas, comentar publicaciones de otros usuarios y gestionar su perfil.

---

## 💾 Tecnologías utilizadas

- **React** 19.1.0.
- **React Router DOM** 7.6.3.
- **Vite** como bundler.
- **Node.js** y **npm** para la gestión de paquetes.
- **ESLint** para análisis de código estático.
- **Context API** para manejo global de usuario.

---

## 🗂️ Estructura del Proyecto

```
/mi-proyecto
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.ico
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── header/
│   │   │   ├── BarraNavegacion.jsx
│   │   │   └── BarraNavegacion.css
│   │   │
│   │   └── footer/
│   │       ├── PieDePagina.jsx
│   │       └── PieDePagina.css
│   │
│   ├── PrivateRoutes/
│   │   └── PrivateRouter.jsx
│   │
│   ├── context/
│   │   └── UserContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Register.jsx
│   │   ├── Register.css
│   │   ├── Profile.jsx
│   │   ├── Profile.css
│   │   ├── NewPost.jsx
│   │   ├── NewPost.css
│   │   ├── PostDetail.jsx
│   │   └── PostDetail.css
│   │
│   ├── routes/
│   │   └── routes.jsx
│   │
│   ├── app.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── readme.md
└── vite.config.js
```
---

## 🚀 Uso

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Ejecutar el servidor de desarrollo con `npm run dev`.
4. Instalar API del repositorio `https://github.com/EP-UnaHur-2025C1/anti-social-mongo-persistentes`.
5. Asegurarse de tener corriendo el backend en `http://localhost:3000/`.
6. Agregar el archivo seed.js en la raíz del proyecto del backend.
7. Ejecutar el siguiente comando para poblar la base de datos:

```
node seed.js
```
---
