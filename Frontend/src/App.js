import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../src/Home';
import { RegistrationForm } from '../src/RegistrationForm';





function App() {
  return (
    <>
      
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/RegistrationFormDocker" element={<RegistrationForm></RegistrationForm>}></Route>
         
        </Routes>
        
  
       
      </BrowserRouter>

    </>
  );
}

export default App;
