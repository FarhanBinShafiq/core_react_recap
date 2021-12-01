import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <h2>Learn React</h2>
      
      <LoadUsers></LoadUsers>
      
      <MyComponent brand="Apple" price="$1000"></MyComponent>
      <MyComponent brand="Microsoft" price="$800"></MyComponent>
    </div>
  );
}

///Api Component usinf useEffect

function LoadUsers(){

  const [users,setUsers]=useState([]);

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  },[])


  return(
    <div>
      <h1>Users Loaded:{users.length}</h1>
      {
        users.map(user=><User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}


function User(props){

  const style={
    backgroundColor:'green',
    border:'3px solid blue',
    margin:'20px',
    padding:'10px'
  }
  return(
    <div style={style}>
      <h3>Name:{props.name}</h3>
      <p>Call Me Baby:{props.phone}</p>
    </div>
  )
}

// Component
function MyComponent(props){
  //css
  const myStyle={
    backgroundColor:'lightblue',
    border:'3px solid blue',
    margin:'20px',
    padding:'10px'
  }
  

////State
const[points,setPoints]=useState(1);
const handlePoints=()=>{
  const newPoints=points*2;
  setPoints(newPoints);
}

  return(
    <div style={myStyle}> 

     
      <h1>My Own Recat Component</h1>
      <p style={{color:'red'}}>I can Write my own Component</p>
      <h2>Brand Name:{props.brand}</h2>
      <p>Price:{props.price}</p>
      <p>I have Points:{points}</p>

      <button onClick={handlePoints}> Add Points </button>
    </div>
  )
}

export default App;
