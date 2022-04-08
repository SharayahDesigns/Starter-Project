import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// a new better way to 'consume' data
export const AuthContext = React.createContext()

//another way to get data
export const AuthConsumer = AuthContext.Consumer

//create Provider
const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user,setUser] = useState(null)
  //Register
  const handleRegister = async (user) => {
    try {
      let res = await axios.post('/api/auth', user);
      setUser(res.data.data)
      navigate('/')
    } catch(err) {
      alert('error: unable to register, do you have a uniqe/valid email')
      console.log(err)   
    }
  };
  //login
  const handleLogin = async (user) => {
    console.log('going to login User', user)
    try {
      //this should give us back user from DataBase
      //assumes email and password are correct
      let res = await axios.post('/api/auth/sign_in',user);
      console.log(res)
      setUser(res.data.data)
      navigate('/')
      //setUser
    } catch(err) {
      alert('error logging in. Is this email and password valid?')
      console.log(err)   
    }
  };
  
  // logout
  const handleLogout = async () => {
    console.log('going to logout User')
    try {
     //Need to send TOKENT: done with the help of initMiddleWare
      let res = await axios.delete('/api/auth/sign_out');
      setUser(null)
      navigate('/login')
      //setUser
    } catch(err) {
      alert('error logging out')
      console.log(err)   
    }
  };
  
  return (
    <AuthContext.Provider value={{ user, setUser, handleRegister, handleLogin, handleLogout}}>
    {children}
    </AuthContext.Provider>
)
}
export default AuthProvider
