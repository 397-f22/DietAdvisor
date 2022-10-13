import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { GiSugarCane, GiSlicedBread, GiChipsBag } from 'react-icons/gi'
import {TbMeat} from 'react-icons/tb'
import {AiOutlineFire} from 'react-icons/ai'

const NutritionInfo = ({nutrients, goal}) => {
    return (
        <div>
            <ListGroup as="ol">
                {
                    Object.entries(nutrients).map(([nutrient, amount])=>{
                        return (
                            
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                {nutrient.includes('Sugar') && <GiSugarCane /> }
                                {nutrient.includes('Protein') && <TbMeat /> }
                                {nutrient.includes('Calories') && <AiOutlineFire /> }
                                {nutrient.includes('Carbo') && <GiSlicedBread /> }
                                {nutrient.includes('Fat') && <GiChipsBag /> }
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{nutrient}</div>
                                </div>
                                <Badge bg="primary" pill>
                                    {amount } 
                                </Badge>
                                {(amount >= goal[nutrient]) 
                                ?  <Badge bg="success">{goal[nutrient]}</Badge> 
                                :  <Badge bg="danger">{goal[nutrient]}</Badge> 
                                }
                               
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default NutritionInfo;