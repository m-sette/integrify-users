import {useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const User = () => {
    const { id } = useParams()
    const API_URL = "https://jsonplaceholder.typicode.com/users/" + id;
    const [user, setUser] = useState({});

    async function fetchData() {
        const res = await fetch(API_URL);
        res
        .json()
        .then(res => setUser(res))
    }

    useEffect(() => {
        fetchData();
    },);

    return (
        <div>
            <ul>
                <li>Name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>website: {user.website}</li>

            </ul>
            <p>address:</p>
            {/*<ul>
                <li>Street: {user.address.street}</li>
                <li>suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zip: {user.address.zipcode}</li>
            </ul>*/}
        </div>
    );
}

export default User
