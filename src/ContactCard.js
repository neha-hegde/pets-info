import React from "react";

const ContactCard = (props) => {
    const {name,img,phno,email}=props.contact;
    return(
        <div>
            <img alt="pet" scr={img} />
            <h3>{name}</h3>
            <p>Phone no:{phno}</p>
            <p>Email:{email}</p>
        </div>
    );
} 

export default ContactCard;