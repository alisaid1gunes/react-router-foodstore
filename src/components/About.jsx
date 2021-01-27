import React from "react";
import { Card } from "react-bootstrap";
function About(props) {
  return (
    <Card className="mt-5">
      <Card.Header>About</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            This website is an assignment given within the scope of bootcamp to
            grasp the react router. It was developed by Ali Said Güneş.{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default About;
