import "../Styles/TemplateKeyskill.css";
import { Container } from "@mui/material";
import React from "react";

const TemplateKeyskill = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeyskill;
