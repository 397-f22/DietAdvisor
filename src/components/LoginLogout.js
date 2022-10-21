import { signInWithGoogle, signOutWithGoogle } from "../database/firebase";
import { Container, Row, Col } from "react-bootstrap";

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
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span onClick={Authenticate} className="login-logout">{localStorage.getItem("userName") ? "Logout" : "Login"}</span>
                </div>
            </Row>
            <Row className="profile-nutrient-goal square border">
                <Col>Nutrient goal: Calories: 0; Protein: 0; Total Carbohydrates: 0; Sugar: 0; Total Fat: 0;</Col>
            </Row>
            <Row className="profile-item-list square border">
                <Col>List of items: </Col>
            </Row>
            <Row className="profile-food-timeseries square border">
                <Col>Food timeseries: </Col>
            </Row>
        </Container>
    )
}

export default LoginLogout;