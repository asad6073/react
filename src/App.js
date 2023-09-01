import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  const nayoks = ['Razzak', 'sakib', 'Bappi','Munna','Shuvo']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$100.99'},
    {name:'Book', price:'$100.99'}

  
  ]
 
  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
        <h2>Nayok list</h2>
        <ul>
          {
            nayoks.map(nayo=><li>{nayo}</li> )
          }
          {
            products.map(product=><li>{product.name} </li> )
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product> )
        }
        <Counter></Counter>
     
      </header>
    </div>
  );
  function Counter(){
    const[count, setCount]= useState(15);
    const increase = ()=>setCount(count +1);
    
    return(
      <div><h1>Count: {count} </h1>
      <button onClick={()=>setCount(count -1)}>Decrease</button>
      <button onClick={()=>setCount(count +1)}>Increase</button>
      </div>
    )
  }
  
  function Users (){
    const [users, setUsers]= useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data => setUsers(data));
    })
    
    return(
      <div>
        <h3>Dynamic User: {users.length} </h3>
        <ul>
      {
        users.map(user=><li>{user.phone} </li> )
      }
      </ul>

      </div>
      
      
    )
  }

  function Product(props){
    const productStyle ={
      border:'1px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'250px',
      width:'400px',
      margin: '10px',
      float: 'left'

    } 
    const {name, price}=props.product;
    return (
      <div style={productStyle}>
        <h1>{name} </h1>
        <h2>Price:{price}</h2>
        <button>Buy Now</button>
      </div>
    )
  }
}

export default App;
