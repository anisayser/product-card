import logo from './logo.svg';
import './App.css';
import FlashProduct from "./components/FlashProduct";
import TrendingProduct from "./components/TrendingProduct/TrendingProduct";

function App() {
  return (
    <div>
      <div className="container-fluid px-5 md:px-10 mx-auto">
        <FlashProduct />
      </div>

      <div className="bg-tertiary">
        <div className="container-fluid px-5 md:px-10 mx-auto">

          <TrendingProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
