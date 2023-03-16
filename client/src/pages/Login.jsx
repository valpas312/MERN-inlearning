import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useContext(UserContext)

  
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://users-app-two.vercel.app/api/usuario/lista')
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
  }, [])
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const isEqual = (email, password) => {
    return data.find(user => user.email === email && user.password === password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = isEqual(email, password)

    if (user) {
      setUser(user)
      alert('Bienvenido')
      navigate('/articles')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return <>
    <h1>Login</h1>
    <form>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </form>
  </>
}

export default Login