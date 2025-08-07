import { useState, useEffect } from 'react';
import { Container, Spinner, Toast } from 'react-bootstrap';
import ProductList from '../componentes/PoductoList.jsx';
import Cart from '../componentes/cart.jsx';
import BestCombination from '../componentes/BestCombination.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const budget = 150;

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
    
    fetch('/api/cart')
      .then(res => res.json())
      .then(setCart);
  }, []);

  const addToCart = (product) => {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(() => {
      fetch('/api/cart')
        .then(res => res.json())
        .then(setCart);
        
      setToastMessage(`"${product.name}" agregado al carrito!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const clearCart = () => {
    fetch('/api/cart', {
      method: 'DELETE'
    }).then(() => {
      setCart([]);
      setToastMessage('Carrito vaciado!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <Container className="py-4">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">
          <i className="bi bi-cart4 me-3"></i>Carrito Express
        </h1>
        <p className="lead">Tu solución de compras inteligentes</p>
      </header>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Cargando productos...</p>
        </div>
      ) : (
        <>
          <ProductList products={products} onAddToCart={addToCart} />
          <Cart cart={cart} onClearCart={clearCart} />
          <BestCombination products={products} budget={budget} />
        </>
      )}

      {/* Toast de notificación */}
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)}
        className="position-fixed bottom-0 end-0 m-3"
        bg="success"
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Notificación</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{toastMessage}</Toast.Body>
      </Toast>
    </Container>
  );
}