import {useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './user.css'

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
        <div className="card-user">
            <ul>
                <li>Name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>website: {user.website}</li>
                <li>Company: {user.company && user.company.name}</li>

            </ul>
            <h2>address:</h2>
            <ul>
                <li>Street: {user.address && user.address.street}</li>
                <li>suite: {user.address && user.address.suite}</li>
                <li>City: {user.address && user.address.city}</li>
                <li>Zip: {user.address && user.address.zipcode}</li>
            </ul>
            <Link to={`/`}>Return</Link>
        </div>
    );
}

export default User
