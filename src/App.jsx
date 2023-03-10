
import React from 'react';
import Header from './components/Header';
import './styles.scss'
import ProductCards from './components/ProductCards';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Support from './components/Support';
import Skeleton from './components/Skeleton';




function App() {

  const [items, setItems] = React.useState([]);
  const [isLoader, setIsLoader] = React.useState(true);

  React.useEffect(() => {
    fetch('https://64075e8877c1a905a0f6f3e0.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoader(false);
      })
  }, []);

  



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductCards items={items} setIsLoader={setIsLoader} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='Support' element={<Support />} />


      </Routes>

    </div>
  )
}

export default App
