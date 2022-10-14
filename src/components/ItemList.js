import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const addFoodPortions = (food,quantity,foodItems,setFoodItems) => {
    const newFoodItems = {...foodItems};
    newFoodItems[food] = foodItems[food] ? foodItems[food] + 1 : 0;

    setFoodItems(newFoodItems);

    console.log(newFoodItems);
}

const subtractFoodPortions = (food,quantity,foodItems,setFoodItems) => {
    const newFoodItems = {...foodItems};
    newFoodItems[food] = foodItems[food] - 1 ;
    if(newFoodItems[food]==0){
        delete newFoodItems[food];
    }
    
    setFoodItems(newFoodItems);

    console.log(newFoodItems);
}

const ItemList = ({foodItems,setFoodItems}) => {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Food Eaten Today</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {
                            Object.entries(foodItems).map(
                                ([food, quantity]) => (
                                    <ListGroup.Item  key={food}>
                                        {food} : {quantity}
                                        <br/>
                                        <Button variant="primary" onClick={()=> {addFoodPortions(food,quantity,foodItems,setFoodItems)}}>+</Button>
                                        <Button variant="primary" onClick={()=> {subtractFoodPortions(food,quantity,foodItems,setFoodItems)}}>-</Button>
                                    </ListGroup.Item>
                                    
                                )
                            )
                        }
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

export default ItemList;