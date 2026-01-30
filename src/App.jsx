import Tracker from './components/Header/IncomeExpence'
import './App.css'
import Front  from './components/Form/LoginForm';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRouter from './components/Form/ProtectedForm';
import { useSelector } from 'react-redux';


function App() {
        const [allow, setAllow] = useState(false)
        
  return (
   <div>
        <Routes>
        <Route path='/' element={<Front setAllow={setAllow}/>} />
        <Route element={<ProtectedRouter allow={allow} />} >
        <Route path="/Tracker" element={<Tracker />} />
        </Route>
        </Routes>
       
    </div>
  )
}

export default App
