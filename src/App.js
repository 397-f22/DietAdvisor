import { useState } from 'react';
import './App.css';
import NutritionInfo from './components/NutritionInfo';
import SearchBar from './components/SearchBar';
import nutrients from './data/menu';

function App() {
  const [selection, setSelection] = useState(null);
  return (
    <div className="App">
      <SearchBar setSelection={setSelection} />
      <NutritionInfo nutrients={nutrients} />
    </div>
  );
}

export default App;
