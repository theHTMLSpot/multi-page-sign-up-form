import './App.css';
import MainInfoForm from './pages/main-info';
import SelectPlanPage from './pages/select-plan';
import AddOnsComponent from './pages/add-ons'; // Make sure this path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/navigation-context';
import ProtectedRoute from './components/protected-route'; // Import the ProtectedRoute component
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [monthly, setMonthly] = useState(true);
  const [plan, setPlan] = useState();

  return (
    <NavigationProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
              <MainInfoForm 
                setName={setName} 
                setEmail={setEmail} 
                setPhoneNumber={setPhoneNumber} 
              />
            } 
          />
          <Route 
            path='/select-plan' 
            element={
              <ProtectedRoute 
                step={1} 
                element={
                  <SelectPlanPage 
                    setPlan={setPlan} 
                    setMonthly={setMonthly} 
                  />
                }
              />
            } 
          />
          <Route 
            path='/add-ons' 
            element={
              <ProtectedRoute 
                step={2} 
                element={
                  <AddOnsComponent 
                    plan={plan} 
                    monthly={monthly} 
                  />
                }
              />
            } 
          />
          <Route 
            path='/summary' 
            element={
              <ProtectedRoute 
                step={3} 
                element={<div>Summary Page</div>} 
              />
            } 
          />
        </Routes>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;