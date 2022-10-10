import { useState } from 'react';
import './App.css';
import NutritionInfo from './components/NutritionInfo';
import SearchBar from './components/SearchBar';
import nutrients from './data/menu';
import Slider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from "./AutoComplete";
import { autoCompleteData } from "./data.js";



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
      <SearchBar macros={macros} setMacros={setMacros} />
      <NutritionInfo nutrients={macros} />
      <Autocomplete data={autoCompleteData} />
      {/* <Slider /> */}
    </div>
  
  );
}

export default App;

