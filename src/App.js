import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail"
import MainHeader from "./components/MainHeader"

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail/>
        </Route>
      </main>
    </div>
  );
}

export default App;
