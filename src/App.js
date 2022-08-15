import { Component } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Project from './pages/project/Project';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:slug' element={<Project />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    );
  }
}

export default App;
