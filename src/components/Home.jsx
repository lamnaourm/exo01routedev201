import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Page d'acceuil</h1>

        <Link to='/about'>To about</Link>
    </div>
  )
}
