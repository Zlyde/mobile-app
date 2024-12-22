import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userRegister } from '../utils/AuthCall'

const UserRegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await userRegister(name, email, password)
      if(!response.ok) {
        const error = await response.json()
        toast.error(error.message)
        return
      }
      toast.success('Användare registrerad')
      navigate('/')
    } catch (error){
      toast.error(error.message)
      return
    }
  }

  return (
    <div>
      <header className="register-header">
        <h1>Registrera dig</h1>
      </header>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Namn"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e-postadress"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ditt lösenord"
            required
          />
        </div>
        <button type="submit" className="register-button">
          Registrera
        </button>
      </form>
      <Link to='/'>
        Logga in
      </Link>
    </div>
  )
}

export default UserRegisterPage
