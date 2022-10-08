import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import nutrients from '../data/menu.jsx';
import foods from "../data/food.json";

const updateMacros = (item, portions, macros) => {
    const newMacros = {};
    Object.assign(newMacros, macros);

    Object.entries(macros).forEach( 
        ([macro, amount]) => {
            newMacros[macro] = amount + portions * item[macro];
        }
    );

    return newMacros;
};

const SearchBar = ({ macros, setMacros }) => {
    const [food,setFood] = useState(Object.keys(foods)[0]); 
    const [portions, setPortions] = useState(0);

    return (
        <div>
            <Form.Select onChange ={(e)=> setFood(e.target.value)}>
                {Object.keys(foods).map((item) => (<option key={item} value={item}>{item}</option>))}
            </Form.Select>
            <Form.Control type="search" placeholder="Enter portions (number)" onChange={(e) => setPortions(e.target.value)} />
            <Button variant="primary" onClick={() => {setMacros(updateMacros(foods[food], portions, macros))}}>Add</Button>
            {/* <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
            /> */}
        </div>
    )

};

export default SearchBar;

