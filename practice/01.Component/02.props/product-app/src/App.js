import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';



function App() {

  // ✅ 객체 가져옴
  const product = {
      productId : 'p000001',
      name : '베이직 폴라 니트',
      price : 42000,
      quantity : 1,
      img: 'https://i.imgur.com/1vpSkbW.png',
  }
  
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}

export default App;