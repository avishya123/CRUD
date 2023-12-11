import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import Update from './components/Update'
import Create from './components/Create'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
