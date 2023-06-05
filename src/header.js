import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const header = () => {
    const handleSubmit = () => {
        localStorage.clear();
        <Navigate to="/login"/>
    }
  return (
    // <div className="header">
    //     <h1>E-Com Solution</h1>
    //     <h1>Logout</h1>
    // </div>
    <nav className="navbar">
      <h1><Link to={`/`}>E-Com Store</Link></h1>
      <form onSubmit={handleSubmit}>
      <button >Logout</button>
      </form>
    </nav>
  )
}

export default header