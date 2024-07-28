
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Card from './components/Card/Card';
function App() {

  const [cards,setCards] = useState([]);
  const [name,setName] = useState([])

  useEffect(() => {
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => (
      setCards(data)
    ))
  },[])
 

  const handleClick = (p) =>{
    const isExists = name.find(item => item.id === p.id);
    if(!isExists){
      const newName = [...name,p]
      setName(newName);
    }
    else{
      alert('card already exists')
    }
    
  };
  // console.log(name)


  const handleDelete = (id) => {
    const newName = name.filter(item => item.id != id);
    setName(newName);

  }

  return (
    <>
     <h1 className='text-6xl text-green-600 shadow-lg animate-bounce 
     '>Hello world</h1>
     <hr/>
   <div className="main-container">
    <div className="cards-container">
    <div className="left-card">
       
    {
     cards.map((cd,ind) => (<Card key={ind} card={cd} handleClick={handleClick}></Card>))
    }
    </div>
    </div>
    <div className="card-container">
    <h1>This is card</h1>
    <hr className='border-dotted' />
    <div className="main-card flex justify-around ">
      <p>name</p>
      <p>price</p>
      <p>Removed</p>
    </div>
    <div>
     {
      name.map((item,indx) => (
        <div className="card-info flex justify-evenly items-center">
         <p>{indx + 1}</p>
          <p>{item.title.substring(0,10)}</p>
          <p>{item.price} $ </p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))
     }
    </div>
    </div>
    </div>  
 

    </>
  )
}

export default App
