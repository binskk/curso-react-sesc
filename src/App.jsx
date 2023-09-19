import { useState } from 'react'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  //console.log("meu primeiro debug")
  const myString = "Minha Variável";
//  const arrayFruits = [
  //  "laranja",
    //"caja",
    //"manga",
    //"melancia",
    //"pera"
  //];
//console.log(arrayFruits)

arrayFruits.map((fruit)=>){
  return (
         console.log(fruit)
  )
});

const arrayObjects = [ 

  {id:1,
  name: "José da Silva"
  age: 15
  },
  {id:2,
  name: "Maria Oliveira"
  age: 43
},
{ id:3,
name: "João de Souza"
age: 19
},
];

 arrayObjects.map ((person.name)=> {
return (
  console.log(`${ person.name} tem ${person.age} anos`)
}
});

const qtd = 4;
//frutas com 4 chars
const fruitResultFind = arrayFruits.find(currentFruit) =>currentFruit.lenght === qtd);
//console.log(fruitResultFind);

//Filtrar Multiplas frutas pela quantidade de chars
const fruitResultFilter = arrayFruits.filter(currentFruit) => currentFruit.lenght ===qtd);
console.log(fruitsResultFilter);

//filtrar item com determinada substring
const search = "abac";
const results = arrayfruits.filter{
  //(currentFruit) => currentFruit.include(search));
  (currentFruit) => currentFruit.startsWith(search));
  console.log(results);

const [ fruit,setFruit] = useState("");
const handleClickFruit = (currentFruit) => {
  setFruit(currentFruit);
}
<div style={{
  padding: "40px",
  testAlign: "center",
  backgroundColor: "#000FF00"
}} >

button onClick = {handle }

  return (
          <div>        
      <h1>Olá Mundo + Marcelo is back</h1>                 
      </p>Seja bem vindo</p>
    </div>
  )
}
export default App
