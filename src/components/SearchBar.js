import { Form, Button } from "react-bootstrap";
import menu from '../data/menu.jsx';


const SearchBar = ({setSelection}) => {
    
    return 
        <Form.Control type="search" placeholder="Enter food" onChange={(e) => setSelection(e.target.value)} />

};

