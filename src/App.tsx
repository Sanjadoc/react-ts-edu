import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { InfoPage } from './pages/InfoPage';
import { NavBar } from './components/Navbar';
import React from "react";
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return <>
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
            <Route path='/' element={<TodosPage />} />
            <Route path='/info' element={<InfoPage/>} />
        </Routes>  
      </div>
    </BrowserRouter>
  </>
}

export default App;