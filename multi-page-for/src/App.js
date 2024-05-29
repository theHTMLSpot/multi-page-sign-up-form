import './App.css';
import MainInfoForm from './pages/main-info';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectPlanPage from './pages/select-plan';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact 
          path='/'
          element={

      
       <MainInfoForm setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/>
     
          } 
        />

        <Route path='/select-plan' element={
           <SelectPlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;