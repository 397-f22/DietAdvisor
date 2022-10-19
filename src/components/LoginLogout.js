import { signInWithGoogle, signOutWithGoogle } from "../database/firebase";
import { Button, Container, Row, Col } from "react-bootstrap";

const LoginLogout = () => {
    const Authenticate = () => {
        if (localStorage.getItem("userName")) {
            signOutWithGoogle()
        } else {
            signInWithGoogle()
        }
    }

    return (
        <Container fluid className="profile-container">
            <Row className="profile-photo-name">
                <div>
                    <img className="profile-photo" src={localStorage.getItem("userPhoto")} referrerpolicy="no-referrer" />
                </div>
                <div style={{fontWeight: "bolder", fontSize: "23px"}}>
                    {localStorage.getItem("userName")}
                </div>
            </Row>
            {/* <Row style={{height: "0vh"}}></Row> */}
            <Row className="profile-nutrient-goal">
                <Col>Nutrient goal: </Col>
            </Row>
            <Row className="profile-item-list">
                <Col>List of items: </Col>
            </Row>
            <Row className="profile-food-timeseries">
                <Col>Food timeseries: </Col>
            </Row>
            <Button onClick={Authenticate}>{localStorage.getItem("userName") ? "Logout" : "Login"}</Button>
        </Container>
    )
}

export default LoginLogout;