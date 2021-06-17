import React from "react";
import ContactCard from "./ContactCard";
import ImageMax from "./images/max.jpg";
import ImageWhiskers from "./images/whiskers.jpg";
import ImageTom from "./images/tom.jpg";
import ImagePearl from "./images/pearl.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <ContactCard 
        contact={{name:"Max",
        img:ImageMax,
        phno:"9876541075",
        email:"max@gmail.com"}} />
      <ContactCard 
        contact={{name:"Whiskers",
        img:ImageWhiskers,
        phno:"8876541075",
        email:"whiskers@gmail.com"}} />
      <ContactCard 
        contact={{name:"Tom",
        img:ImageTom,
        phno:"7876541075",
        email:"tom@gmail.com"}} />
      <ContactCard 
        contact={{name:"Pearl",
        img:ImagePearl,
        phno:"6876541075",
        email:"pearl@gmail.com"}} />
    </div>
  );
}

export default App;