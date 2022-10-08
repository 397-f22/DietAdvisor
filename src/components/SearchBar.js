import { Form, Button } from "react-bootstrap";
import nutrients from '../data/menu.jsx';
import food from "../data/food.json";

const SearchBar = ({ setSelection }) => {
    console.log(food);
    return (
        <div>
            <Form.Select aria-label="Default select example">
                {Object.keys(food).map((item) => (<option key={item} value={item}>{item}</option>))}
            </Form.Select>
            <Form.Control type="search" placeholder="Enter portions (number)" onChange={(e) => setSelection(e.target.value)} />
            <Button variant="primary">Add</Button>
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

