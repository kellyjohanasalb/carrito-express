import { Button, Card, Row, Col } from 'react-bootstrap';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Row className="g-4">
      <h2 className="mb-4">Productos Disponibles</h2>
      {products.map(product => (
        <Col key={product.id} md={3} sm={6} xs={12}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-primary">{product.name}</Card.Title>
              <Card.Text className="text-success fw-bold fs-4">
                ${product.price}
              </Card.Text>
              <Button 
                variant="outline-primary" 
                className="mt-auto"
                onClick={() => onAddToCart(product)}
              >
                <i className="bi bi-cart-plus me-2"></i>Agregar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;