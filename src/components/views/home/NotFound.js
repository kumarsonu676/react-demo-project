// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import { Button, Card } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <h1 className="text-center">Page Not Found</h1>
      <p>The page you are looking for not found.</p>
      <button className="btn btn-primary">CLick Me</button>

      <br />
      <Button className="mt-5" variant="primary">
        I M USING REACT BOOTSTRATP
      </Button>

      <br />
      <br />

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="logo512.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
