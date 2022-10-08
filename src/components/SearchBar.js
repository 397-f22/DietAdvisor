import { Form, Button } from "react-bootstrap";
import nutrients from '../data/menu.jsx';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {food} from '../data/menu.jsx'

// const handleOnSearch = (string, results) => {
//     onSearch will have as the first callback parameter
//     the string searched and for the second the results.
//     console.log(string, results)
//   }

//   const handleOnHover = (result) => {
//     // the item hovered
//     console.log(result)
//   }

//   const handleOnSelect = (item) => {
//     // the item selected
//     console.log(item)
//   }

//   const handleOnFocus = () => {
//     console.log('Focused')
//   }
const items = [
    {
        id: 0,
        name: 'Cobol'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Basic'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'Java'
    }
]

const formatResult = (item) => {
    return (
        <>
            <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
            <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        </>
    )
}

const SearchBar = ({ setSelection }) => {
    return (
        <div>
            <Form.Control type="search" placeholder="Enter food" onChange={(e) => setSelection(e.target.value)} />
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1"></option>
                <option value="2">Low Fat Vanilla </option>
                <option value="3">Apple</option>
            </Form.Select>
            <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
            />
        </div>
    )

};

export default SearchBar;

