import * as React from 'react';
import Login from './components/Login';
import {Link,Routes,BrowserRouter,Route} from "react-router-dom";
import Signuppage from './components/Signup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route exact path="/" element={<Login />} />
     <Route exact path="/oct" element={<Signuppage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
