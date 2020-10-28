import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import "./users.css"
const Contacts = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const [contacts, setContacts] = useState([]);

    async function fetchData() {
        const res = await fetch(API_URL);
        res
        .json()
        .then(res => setContacts(res))
        console.log(res);
    }

    useEffect(() => {
        fetchData();
    },[]);

    let listContacts = contacts.map(contact => {
        return(

            <Link to={`/user/${contact.id}`}>
                <div className="card" >
                    <p>{contact.name}</p>
                    <p>@{contact.username}</p>
                    <p>{contact.website}</p>
                    
                </div>
            </Link>
        )
    })

    return (
        <div className="card-container">
            {listContacts}
        </div>
    );
}

export default Contacts
