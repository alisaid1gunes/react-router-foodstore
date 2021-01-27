import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Button } from "react-bootstrap";
function Contact(props) {
  return (
    <div className="col-md-12 d-flex justify-content-center">
      <Card className="w-25 mt-3 text-center p-2  ">
        <Row className="d-flex justify-content-center">
          <Card.Img
            className="rounded-circle w-50"
            variant="top"
            src="https://pbs.twimg.com/profile_images/1181475356060073984/EX0DJS_1_200x200.jpg"
          />
        </Row>

        <Card.Body>
          <Card.Title>Ali Said Güneş</Card.Title>
          <Card.Text>This project developed by Ali Said Güneş</Card.Text>
          <Col md={12}>
            <Row className="d-flex justify-content-center">
              <Button
                href="mailto:alisaidgunes1@gmail.com"
                className="btn btn-danger mt-3"
              >
                Send an e-mail
              </Button>
            </Row>
            <Row className="d-flex justify-content-center">
              <Button
                href="https://www.linkedin.com/in/ali-said-g%C3%BCne%C5%9F-990834186/"
                className="btn btn-danger mt-3"
              >
                View Linkedin account
              </Button>
            </Row>
            <Row className="d-flex justify-content-center">
              <Button
                href="https://github.com/alisaid1gunes"
                className="btn btn-danger mt-3"
              >
                Github
              </Button>
            </Row>
            <Row className="d-flex justify-content-center">
              <Button
                href="https://twitter.com/alisaidguness"
                className="btn btn-danger mt-3"
              >
                Twitter
              </Button>
            </Row>
            <Row className="d-flex justify-content-center">
              <Button
                href="https://www.instagram.com/alisaidgunes/"
                className="btn btn-danger mt-3"
              >
                Instagram
              </Button>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Contact;
