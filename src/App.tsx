
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Dashbord from './pages/Dashbord'
import Home from './components/Home'


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashbord />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
