import React, { useState } from 'react';
import './App.css';

import ColorPicker from './components/ColorPicker/ColorPicker';

const colors = [
  { name: 'red', color: '#FF0000' },
  { name: 'green', color: '#008000' },
  { name: 'blue', color: '#0000FF' }
]

const App = () => {
  const initialValue = colors[0].color;
  const [color, setColor] = useState(initialValue);

  return (
    <div className='App'>
      <header className='App-header'>
        <ColorPicker
          value={color}
          colors={colors}
          onChange={e => setColor(e)}
        />
      </header>
    </div>
  )
}

export default App;
