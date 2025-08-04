import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './App.css';
import DoughCalculator from './components/doughCalculator';


function App() {

return (
  <>
      <header className='header container'>
      </header>
      <div className='body'>
        <DoughCalculator/>
      </div>
  </>
  )
}

export default App
