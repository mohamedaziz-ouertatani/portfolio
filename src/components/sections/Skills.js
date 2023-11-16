import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skillsData = {
    languages: [
      { name: 'HTML5', level: 70 },
      { name: 'CSS3', level: 60 },
      { name: 'JavaScript', level: 80 },
      { name: 'PHP', level: 60 },
      { name: 'C/C++', level: 80 },
      { name: 'TypeScript', level: 70 },
      { name: 'Java', level: 60 },
      { name: 'SQL', level: 70 },
    ],
    librariesFrameworks: [
      { name: 'ReactJS', level: 80 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Symfony', level: 70 },
      { name: 'MongoDB', level: 60 },
      { name: 'Node.js', level: 60 },
    ],
    tools: [
      { name: 'Git & Github', level: 80 },
      { name: 'VS Code', level: 80 },
      { name: 'Oracle', level: 80 },
      { name: 'Adobe Photoshop', level: 60 },
      { name: 'Adobe Illustrator', level: 60 },
    ],
  };

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
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">SKILLS</h2>
        <Row>
          {renderSkillsCategory(skillsData.languages, 'Languages')}
          {renderSkillsCategory(skillsData.librariesFrameworks, 'Libraries & Frameworks')}
          {renderSkillsCategory(skillsData.tools, 'Tools')}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
