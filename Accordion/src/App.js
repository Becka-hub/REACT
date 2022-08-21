import React, { useState } from 'react';
import data from './data.json';
import './App.css';
const App = () => {
  const [selected, setSelected] = useState(0);
  const toogle = (i) => {
    if (selected === i) {
      setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className="wrapper">
      <div className="accordion_bloc">
        {data.map((item, i) => {
          return (
            <div className='item' key={i}>
              <div className='title' onClick={() => toogle(i)}>
                <h2>{item.name}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App