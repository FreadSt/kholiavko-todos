import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar'
import { TodosPage }  from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {

  return (
    <Router>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<TodosPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App