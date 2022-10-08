import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import nutrients from '../data/menu.jsx';
import foods from "../data/food.json";

const SearchBar = ({ setMacros }) => {
    const [food,setFood] = useState(0); 

    return (
        <div>
            <Form.Select onChange ={(e)=> setFood(e.target.value)}>
                {Object.keys(foods).map((item) => (<option key={item} value={item}>{item}</option>))}
            </Form.Select>
            <Form.Control type="search" placeholder="Enter portions (number)" onChange={(e) => setMacros(e.target.value)} />
            <Button variant="primary" onClick={setMacros()}>Add</Button>
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

