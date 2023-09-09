import Card from './components/Card'
import './App.css'
import { useState } from 'react';


function App() {
  const products = [
    {
      imageUrl: "https://source.unsplash.com/600x400/?laptop",
      title: "High-Performance Laptop",
      description: "Experience lightning-fast speed and stunning visuals with our latest laptop."
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?smartphone",
      title: "Premium Smartphone",
      description: "Stay connected with the world using our sleek and feature-rich smartphone."
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?headphones",
      title: "Noise-Canceling Headphones",
      description: "Immerse yourself in crystal-clear audio with our top-of-the-line headphones."
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?camera",
      title: "Professional Camera",
      description: "Capture stunning photos and videos with our professional-grade camera."
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?watch",
      title: "Luxury Watch",
      description: "Elevate your style with our exquisite luxury watch collection."
    }
  ];

  let [filteredProducts, setFilteredProducts] = useState(products);

  function removeProduct(productName){
    setFilteredProducts(filteredProducts.filter((product)=>product.title !== productName))
  }

  function reset(){
    setFilteredProducts(products)
  }

  return (<div style={{display:'flex', justifyContent: "center", marginTop:"60px",flexWrap:'wrap', gap: "30px"}}>
      {
        filteredProducts.map(product=>{
          return <Card cardImage={product.imageUrl} cardH1={product.title} itemDetails={product.description} removeProduct={removeProduct}/>
        })
      }
      <div className={filteredProducts.length!=0?"d-none": "d-flex"}>
        <button className='btn' onClick={reset}>Reset</button>
      </div>
  </div>)
}

export default App
