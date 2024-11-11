import React from "react";

import "./Realisations.jsx";
import { Card, Button } from "react-bootstrap";

const Gob = ({ title, description, tools, imgSrc }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className="tit">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Voir</Button>
        <div className="mt-2 p-2" style={{ backgroundColor: "#EEE" }}>
          {tools}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Gob;
