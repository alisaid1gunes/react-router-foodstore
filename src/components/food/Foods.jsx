import React from "react";
import foods from "../../data/foods.json";
import FoodCard from "./FoodCard";
import Search from "../Search";
import { Col, Row } from "react-bootstrap";
function Foods(props) {
  const foodItems = foods.results
    .filter((item) => item.isActive)
    .map((item) => (
      <Col className="mb-3" sm={6} key={item.id}>
        <FoodCard
          id={item.id}
          title={item.title}
          detail={item.detail}
          img={item.img}
        />
      </Col>
    ));
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Foods</h1>
      <Search />
      <hr />
      <Row>{foodItems}</Row>
    </>
  );
}
export default Foods;
