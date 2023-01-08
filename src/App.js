import React from 'react';
import './App.css';
import CartItem from './components/Cart/CartItem';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {items} from './data.js';

function App() {
  const [cartData,setCartData] = React.useState([]);

  const handleAdd = (itemData) => {
    const item = cartData.find((tmp) => tmp.id === itemData.id);
    if((!item && itemData.avalQty) === 0 || (item && item.avalQty === 0)){
      alert('All items have been added');
      return;
    }
    //console.log(item);
    if(item) {
      setCartData(cartData.map((x) => 
      (x.id === itemData.id) ? {...item,
      qty : item.qty+1,
      avalQty : item.avalQty - 1} : x));
      //console.log(item);
    } else {
      setCartData([...cartData, {...itemData,qty : 1,avalQty : itemData.avalQty - 1}]);
    }
    console.log(cartData);
  }

  const handleRemove = (itemData) => {
    const item = cartData.find((tmp) => tmp.id === itemData.id);
    if(item.qty === 1){
      setCartData(cartData.filter((tmp) => tmp.id !== itemData.id));
    } else {
      setCartData(cartData.map((tmp) => 
        (tmp.id === itemData.id) && {...item,qty : item.qty - 1,avalQty : item.avalQty + 1}
        // tmp = (tmp.id === itemData.id) ? {...item,avalQty : item.avalQty + 1} : tmp
      ));
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className = "main-section">
        <Products 
          itemsData = {items} 
          handleAdd = {handleAdd}
        />
        <CartItem 
          cartData = {cartData}
          handleRemove = {handleRemove}
          handleAdd = {handleAdd}
        />
      </div>
    </div>
  );
}

export default App;
