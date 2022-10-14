import { useState } from 'react';
import './App.css';
import NutritionInfo from './components/NutritionInfo';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import SetGoal from './components/SetGoal';
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
      "Total Fat (g)": 0,


  });

  const [goals, setGoals] = useState({
    "Calories": 0,
    "Protein (g)": 0,
    "Total Carbohydrates (g)": 0,
    "Sugar (g)": 0,
    "Total Fat (g)": 0,
});
  const [foodItems, setFoodItems] = useState({});
  return (
    <div className="App">
      <SearchBar macros={macros} foodItems={foodItems} setFoodItems={setFoodItems} setMacros={setMacros} />
      <SetGoal goals={goals} setGoals={setGoals}/>
      <NutritionInfo nutrients={macros} goal={goals} />
      <ItemList foodItems={foodItems} setFoodItems={setFoodItems}/>
      <Autocomplete data={autoCompleteData} />
      {/* <Slider /> */}
    </div>
  
  );
}

export default App;

