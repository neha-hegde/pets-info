import React from "react";

const ContactCard = (props) => {
    const {name,img,phno,email}=props.contact;
    console.log(img);
    return(
        <div className="pet">
            <img className="image" alt="pet" src={img} />
            <h3>{name}</h3>
            <p><span>Phone no: </span>{phno}</p>
            <p><span>Email: </span>{email}</p>
        </div>
    );
} 

export default ContactCard;