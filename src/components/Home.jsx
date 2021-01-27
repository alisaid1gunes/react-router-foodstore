import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PngImage from "../img/food.png";
function Home(props) {
  return (
    <Row className="mt-5">
      <Col md={6}>
        <img src={PngImage} className=" w-100" />
      </Col>
      <Col md={6} style={{ marginTop: "20vh" }}>
        <h1>Hey ! Best foods in there.</h1>
        <br />
        <h1>Lets explore...</h1>
      </Col>
    </Row>
  );
}
export default Home;
