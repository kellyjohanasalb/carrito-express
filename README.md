Carrito Express - Documentación 🛒
Descripción del Proyecto
Carrito Express es una aplicación web que implementa un carrito de compras inteligente con un algoritmo de optimización para maximizar el valor de los productos seleccionados dentro de un presupuesto determinado.

Características principales:

🛍️ Listado de productos con precios

🧺 Sistema de carrito de compras

🧠 Algoritmo de optimización que selecciona la mejor combinación de productos

📱 Diseño responsive con Bootstrap

💬 Notificaciones en tiempo real

Requisitos Técnicos
Node.js (v18 o superior)

npm (v9 o superior)

Instalación y Configuración
1. Clonar el repositorio
bash
git clone https://github.com/tu-usuario/carrito-express.git
cd carrito-express
2. Instalar dependencias
bash
npm install
3. Ejecutar la aplicación
bash
npm run dev
4. Acceder a la aplicación
Abre tu navegador y visita:

text
http://localhost:3000
Visualización de Resultados
La aplicación mostrará tres secciones principales:

1. Lista de Productos
Productos disponibles con sus precios

Botón "Agregar" para añadir productos al carrito

2. Carrito de Compras
Productos seleccionados

Total de la compra

Botón para vaciar el carrito

3. Mejor Combinación
Lista de productos óptima según el presupuesto

Total de la combinación seleccionada

Monto de ahorro (diferencia entre presupuesto y total)

Solución Implementada
Algoritmo de Optimización
El corazón de la aplicación es la función findBestCombination que resuelve el problema de la mochila usando programación dinámica:

javascript
const findBestCombination = (products, budget) => {
  const dp = Array(budget + 1).fill(0);
  const selected = Array(budget + 1).fill().map(() => []);
  
  for (let i = 0; i < products.length; i++) {
    for (let j = budget; j >= products[i].price; j--) {
      if (dp[j] < dp[j - products[i].price] + products[i].price) {
        dp[j] = dp[j - products[i].price] + products[i].price;
        selected[j] = [...selected[j - products[i].price], products[i]];
      }
    }
  }
  
  return selected[budget];
};
Ejemplo de Funcionamiento
Con los productos:

json
[
  {"id": 1, "name": "Producto 1", "price": 60},
  {"id": 2, "name": "Producto 2", "price": 100},
  {"id": 3, "name": "Producto 3", "price": 120},
  {"id": 4, "name": "Producto 4", "price": 70}
]
Y un presupuesto de $150, el algoritmo selecciona:

json
[
  {"id": 1, "name": "Producto 1", "price": 60},
  {"id": 4, "name": "Producto 4", "price": 70}
]
Total: $130
Ahorro: $20

¿Por qué esta solución?
✅ Óptima: Garantiza encontrar la combinación con máximo valor

⚡ Eficiente: Complejidad O(n * budget)

💡 Intuitiva: Fácil de entender e implementar

🧩 Integrable: Se adapta perfectamente al flujo de React

Capturas de Pantalla
https://public/screenshot.png

Tecnologías Utilizadas
Next.js: Framework de React para renderizado híbrido

React: Biblioteca para construcción de interfaces

Bootstrap: Framework CSS para diseño responsive

Bootstrap Icons: Iconos modernos para la interfaz

JavaScript: Lenguaje de programación principal

Estructura de Archivos
text
carrito-express/
├── components/
│   ├── BestCombination.jsx  # Algoritmo de combinación
│   ├── Cart.jsx             # Componente del carrito
│   └── ProductList.jsx      # Lista de productos
├── pages/
│   ├── api/
│   │   ├── cart.js          # API del carrito
│   │   └── products.js      # API de productos
│   └── index.js             # Página principal
├── public/                  # Archivos estáticos
├── styles/                  # Estilos CSS
├── package.json             # Dependencias
└── README.md                # Documentación
Despliegue en Vercel
Para desplegar la aplicación en producción:

https:[//carrito-express.vercel.app](https://carrito-express.vercel.app/)


O manualmente:

Crea cuenta en Vercel

Conecta tu repositorio de GitHub

Selecciona el proyecto carrito-express

Configuración automática (Next.js)

¡Despliega!


## 🙋‍♀️ Autora

Desarrollado por **Kelly Johana Saldaña Betancur**  
[GitHub](https://github.com/kellyjohanasalb)

