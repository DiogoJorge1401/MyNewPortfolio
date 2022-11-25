import { Col, Container, Row, Tab } from "react-bootstrap";
import colorSharp2 from '../../assets/img/color-sharp2.png';
import { ProjectCard } from "../ProjectCard";
import "./index.scss";
import projects from "./projects";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>

            <p>
              Aqui estão alguns projetos pessoais que desenvolvi para melhorar
              minhas habilidades nas tecnologias que uso:
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((el, idx) => (
                      <ProjectCard {...el} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp2} className="background-image-right" />
    </section>
  );
};
