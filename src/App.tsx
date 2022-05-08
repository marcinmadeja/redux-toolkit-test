
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { BasicExample } from './pages/basic-example';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasicExample />} />
      </Routes>
    </div>
  )
}
