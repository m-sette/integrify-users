import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './users.css'
import Btn from './btn'
const Contacts = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  const [contacts, setContacts] = useState([])

  async function fetchData() {
    const res = await fetch(API_URL)
    res.json().then((res) => setContacts(res))
    console.log(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  let listContacts = contacts.map((contact) => {
    return (
      <div className="card" key={contact.id}>
        <div className="avatar">
            <p>{contact.name.charAt(0)}</p>
        </div>
        <h2 className="name">{contact.name}</h2>
        <h2 className="user-name">@{contact.username}</h2>
        <h2 className="website">{contact.website}</h2>
            <div className="detail-btn">
                <Link to={`/user/${contact.id}`}><Btn /></Link>
            </div>
      </div>
    )
  })

  return <div className="card-container">{listContacts}</div>
}

export default Contacts
