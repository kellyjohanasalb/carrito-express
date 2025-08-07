# 🛒 Carrito Express

**Carrito Express** es una aplicación de e-commerce desarrollada con **Next.js**, **React**, **Bootstrap** y **JavaScript**, que permite a los usuarios explorar productos, agregarlos al carrito y simular una experiencia de compra simple y funcional.

El objetivo del proyecto es construir una tienda online moderna con una interfaz clara y una experiencia fluida, integrando lógica de carrito de compras y funcionalidades básicas de un ecommerce.


Este proyecto es ideal para demostrar habilidades prácticas en el desarrollo web moderno, la comunicación entre frontend y backend y el manejo de rutas y peticiones HTTP.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework de React para apps web con renderizado del lado del servidor.
- [React](https://reactjs.org/) – Librería de JavaScript para construir interfaces de usuario.
- [Bootstrap](https://getbootstrap.com/) – Framework de CSS para diseño responsive.
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Lenguaje de programación.
- [Vercel](https://vercel.com/) – Plataforma de despliegue.

## 🌐 Demo en producción

Puedes ver el proyecto en funcionamiento aquí:  
🔗 [https://react-express-store.vercel.app](https://react-express-store.vercel.app)

---

## ⚙️ Instalación y ejecución local

1. **Clona el repositorio**

```bash
git clone https://github.com/kellyjohanasalb/carrito-express.git
cd carrito-express
---

## 📁 Estructura del proyecto

```
carrito-express/
├── components/       # Componentes de React
│   ├── BestCombination.jsx
│   ├── Cart.jsx
│   └── ProductList.jsx
├── pages/            # Rutas y API
│   ├── api/
│   │   ├── cart.js
│   │   └── products.js
│   └── index.js      # Página principal
├── public/           # Archivos estáticos
├── styles/           # Estilos CSS
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución del proyecto localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/kellyjohanasalb/carrito-express.git
cd carrito-express
```

---

### 2. Instalación de dependencias

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 3. Ejecución del proyecto

#### Inicia el servidor backend

```bash
cd backend
npm run dev
```

Esto levantará el backend en:  
📡 **http://localhost:3000/**

#### Inicia el frontend

```bash
cd ../frontend
npm run dev
```

Esto abrirá la interfaz React en:  
🌐 **http://localhost:5173/**

---

## 🌍 Despliegue en Vercel

Puedes acceder a la versión desplegada del frontend aquí:

🔗 [https://carrito-express.vercel.app](carrito-express.vercel.app) 



---

## 🧪 Funcionalidades

- 📋 Registro de productos con nombre y precio
- 📊 Visualización en tabla
- ❌ Eliminación de productos
- 🔄 Sincronización entre frontend y backend
- 🎨 Interfaz simple y clara usando Bootstrap

---

## 📌 Consideraciones para el despliegue

- Cambia la URL del backend en el frontend (`src/components/Formulario.jsx` y `TablaProductos.jsx`) cuando hagas el despliegue.
- Verifica que CORS esté habilitado correctamente en el backend (`index.js`).
- Asegúrate de subir ambos proyectos a plataformas compatibles:  
  - **Frontend:** Vercel  
  - **Backend:** Render / Railway / Cyclic / Fly.io

---

## 🙋‍♀️ Autora

Desarrollado por **Kelly Johana Saldaña Betancur**  
[GitHub](https://github.com/kellyjohanasalb)

