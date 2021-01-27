import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function FoodCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>

        <Link className="btn btn-danger" to={`/foods/${props.id}`}>
          Explore
        </Link>
      </Card.Body>
    </Card>
  );
}
FoodCard.defaultProps = {
  title: "lorem",
  detail: "info",
};
export default FoodCard;
