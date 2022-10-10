import { ListGroup } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const ItemList = ({foodItems}) => {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Food Eaten Today</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {
                            Object.entries(foodItems).map(
                                ([food, quantity]) => (
                                    <ListGroup.Item  key={food}>{food} : {quantity}</ListGroup.Item>
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