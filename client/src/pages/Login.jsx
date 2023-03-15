import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = () => {

  
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://users-app-two.vercel.app/api/usuario/lista')
    .then(res => {
      setData(res.data)
    })
  }, [])
  
  console.log(data)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [user, setUser] = useState(null)
  
  const isEqual = (email, password) => {
    return data.find(user => user.email === email && user.password === password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = isEqual(email, password)

    if (user) {
      setUser(user)
      alert('Bienvenido')
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
