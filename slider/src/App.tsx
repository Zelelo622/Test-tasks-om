import ProductList from "./components/ProductList/ProductList";
import { mockProducts } from "./mocks/mockProducts";

function App() {
  return <ProductList products={mockProducts} />;
}

export default App;
