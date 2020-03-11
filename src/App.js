import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Riaz Khan', 'Joshim Uddin', 'Manna Badsha', 'Sakib Khan', 'Rahim', 'Anowar', 'Shabuddin']
  const products = [
    {name:'Photoshop', price: '$99'},
    {name:'Illustrtor', price: '$75.99'},
    {name:'PDF Reader', price: '$6.99'},
    {name: 'Adobe Premire', price: '$279.50'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <p>List of Nayoks</p>
          <ul>
              {
                nayoks.map(nayok => <li>{nayok}</li>)
              }
              {
                products.map(product => <li>{product.name}</li>)
              }
          </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        {/* <Product product={products[0]}></Product>
         <Product product={products[1]}></Product>
         <Product product={products[2]}></Product> */}
     
      </header>
    </div>
  );
  
  function Counter(){
    const [count, setCount] = useState(10);
    // const handleIncrease = () => setCount(count + 1);

    return (
      <div>
        <h1>Count : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increased</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function Users(){
    const [users, setUsers] = useState([]);
    useState(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
    }, [])

    return(
      <div>
        <h3>Dynamic Data : {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    )
  }

  function Product(props){
    const productStyle = {
      float: 'left',
      margin: '10px',
      width: '300px',
      height: '250px',
      borderRadius: '10px',
      backgroundColor: 'gray',
      border: '5px solid white'
    }

    const {name, price} = props.product;
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }

}

export default App;
