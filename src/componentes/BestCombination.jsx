import { Alert, ListGroup, Badge } from 'react-bootstrap';

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

const BestCombination = ({ products, budget }) => {
  const bestCombo = findBestCombination(products, budget);
  const total = bestCombo?.reduce((sum, item) => sum + item.price, 0) || 0;

  return (
    <Alert variant="info" className="mt-5">
      <Alert.Heading className="d-flex align-items-center">
        <i className="bi bi-lightbulb me-2"></i>
        Mejor Combinación (Presupuesto: ${budget})
      </Alert.Heading>
      
      {bestCombo?.length > 0 ? (
        <>
          <ListGroup className="mt-3">
            {bestCombo.map((item, index) => (
              <ListGroup.Item 
                key={index} 
                className="d-flex justify-content-between"
              >
                <span>{item.name}</span>
                <Badge bg="info" pill>${item.price}</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
          
          <div className="mt-3 fw-bold">
            Total: <span className="text-success">${total}</span> 
            <span className="ms-3">
              Ahorro: <span className="text-danger">${budget - total}</span>
            </span>
          </div>
        </>
      ) : (
        <p>No se encontró combinación válida con este presupuesto</p>
      )}
    </Alert>
  );
};

export default BestCombination;