let cart = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(cart);
      break;
    
    case 'POST':
      const product = req.body;
      cart.push(product);
      res.status(200).json({ message: 'Producto agregado al carrito' });
      break;
    
    case 'DELETE':
      cart = [];
      res.status(200).json({ message: 'Carrito vaciado' });
      break;
    
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}