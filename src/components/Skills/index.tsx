import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { CircularProgressBar } from "../CircularProgressBar";
import "./index.scss";

export const Skills = () => {
  const responsive = {
    extraLargeScreens: {
      breakpoint: { max: 4000, min: 1401 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1400, min: 1025 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col className="p-0">
            <div className="skill-bx">
              <h2>Habilidades</h2>

              <p>
                Minha capacitação é proveniente de cursos e conteúdos
                disponíveis na web. Ao longo de 2 anos e meio na área consegui
                por meios de projetos pessoais aprender:
              </p>

              <Carousel
                responsive={responsive}
                infinite
                className="skill-slider"
              >
                <div className="item">
                  <CircularProgressBar value={90} />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={90} />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={90} />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={85} />
                  <h5>Typescript</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={80} />
                  <h5>ReactJs</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={85} />
                  <h5>Node.js</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={85} />
                  <h5>Express</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={80} />
                  <h5>MySQL</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={80} />
                  <h5>PostgreSQL</h5>
                </div>

                <div className="item">
                  <CircularProgressBar value={85} />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};
