import React from "react";
import ContactCard from "./ContactCard";

const App = () => {
  return (
    <div>
      <ContactCard 
        contact={{name:"Max",
        img:"./images/max.jpg",
        phno:"9876541075",
        email:"max@gmail.com"}} />
      <ContactCard 
        contact={{name:"Whiskers",
        img:"./images/whiskers.jpg",
        phno:"8876541075",
        email:"whiskers@gmail.com"}} />
      <ContactCard 
        contact={{name:"Tom",
        img:"./images/tom.jpg",
        phno:"7876541075",
        email:"tom@gmail.com"}} />
      <ContactCard 
        contact={{name:"Pearl",
        img:"./images/pearl.jpg",
        phno:"6876541075",
        email:"pearl@gmail.com"}} />
    </div>
  );
}

export default App;