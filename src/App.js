import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';


function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow','dog','gator','horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    // step 1. Define a piese of state with the useState function

    //step 2. Give a value to the useState function. This is the default, starting 
    //value for our oices of state 
    //const [count, setCount] = useState(0);
    const[animals,setAnimals] = useState([]);


    //step 3. When user does something, update the piece of state. Causes React to rerender the component
    const handleClick =()=>{
        //['cat']
        
        setAnimals([...animals, getRandomAnimal()]);
        //setCount(count+1);
    };


    const renderedAnimals = animals.map((animal, index) =>{
        return <AnimalShow type={animal} key={index} />;
    });
    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App;