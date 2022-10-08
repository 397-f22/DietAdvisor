import { useState } from 'react';
import './App.css';
import NutritionInfo from './components/NutritionInfo';
import SearchBar from './components/SearchBar';
import nutrients from './data/menu';

function App() {
  const [macros, setMacros] = useState({
      "Calories": 0,
      "Protein (g)": 0,
      "Total Carbohydrates (g)": 0,
      "Sugar (g)": 0,
      "Total Fat (g)": 0
  });
  return (
    <div className="App">
      <SearchBar setMacros={setMacros} />
      <NutritionInfo nutrients={macros} />
    </div>
  );
}

export default App;

