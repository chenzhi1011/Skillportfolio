import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobephotoshop,
  SiCmake,
  SiRhinoceros,
  SiSketchup,
  SiAdobeillustrator
} from "react-icons/si";

function Architools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCmake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRhinoceros />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSketchup />
      </Col>
    </Row>
  );
}

export default Architools;
