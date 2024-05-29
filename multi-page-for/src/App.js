import './App.css';
import YourInfo from './pages/main-info';
import { useState } from 'react';

function App() {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  console.log(name, email ,phoneNumber)

  return (
    <div className="App">
      <header className="App-header">
       <YourInfo setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/>
      </header>
    </div>
  );
}

export default App;
