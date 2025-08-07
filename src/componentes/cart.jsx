import { ListGroup, Badge, Button } from 'react-bootstrap';

const Cart = ({ cart, onClearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-5 p-4 bg-light rounded-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>
          <i className="bi bi-cart me-2"></i>Carrito 
          <Badge bg="secondary" className="ms-2">{cart.length}</Badge>
        </h2>
        <Button variant="outline-danger" size="sm" onClick={onClearCart}>
          <i className="bi bi-trash me-1"></i>Vaciar
        </Button>
      </div>
      
      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item 
                key={index} 
                className="d-flex justify-content-between align-items-center"
              >
                <span>{item.name}</span>
                <Badge bg="success" pill>${item.price}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
          
          <div className="mt-3 fw-bold fs-4 text-end">
            Total: <span className="text-primary">${total}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;