import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import skillsData from "../data/SkillsData";

const Skills = () => {
  console.log("skillsData:", skillsData);

  const { languages, librariesFrameworks, tools } = skillsData;

  console.log("languages:", languages);
  console.log("librariesFrameworks:", librariesFrameworks);
  console.log("tools:", tools);

  const renderSkillsCategory = (category, categoryName) => (
    <Col md={4} key={categoryName}>
      <h4>{categoryName}</h4>
      {category.map((skill, index) => (
        <div className="mb-3" key={index}>
          <p className="font-weight-bold">{skill.name}</p>
          <ProgressBar now={skill.level} label={`${skill.level}%`} />
        </div>
      ))}
    </Col>
  );

  return (
    <Container className="">
      <h2 className="text-center mb-4 mt-4">SKILLS</h2>
      <Row>
        {languages && renderSkillsCategory(languages, "Languages")}
        {librariesFrameworks &&
          renderSkillsCategory(librariesFrameworks, "Libraries & Frameworks")}
        {tools && renderSkillsCategory(tools, "Tools")}
      </Row>
    </Container>
  );
};

export default Skills;
