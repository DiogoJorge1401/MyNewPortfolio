import Aos from "aos";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "./index.scss";

export const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

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

  const techs = [{
    icon: <SiTypescript color='#3079c6' />,
    tech: "Typescript",

  }, {
    icon: <SiReact color='#60dbfb' />,
    tech: "ReactJs",

  }, {
    icon: <SiNodedotjs color='#83cd29' />,
    tech: "Node.js"
  },
  {
    icon: <SiExpress color='#323232' />,
    tech: "Express.js"
  },
  {
    icon: <SiMysql color='#00748e' />,
    tech: "MySQL"
  },
  {
    icon: <SiPostgresql color='#326790' />,
    tech: "PostgreSQL"
  },
  {
    icon: <SiMongodb color='#13924e' />,
    tech: "MongoDB"
  }, {
    icon: <SiHtml5 color='#e44c27' />,
    tech: "HTML5"
  }, {
    icon: <SiCss3 color='#214ce5' />,
    tech: "CSS3",

  }, {
    icon: <SiJavascript color='#f8dc3e' />,
    tech: "JavaScript",

  }, {
    icon: <SiTailwindcss color='#07b6d5' />,
    tech: "TailwindCSS",

  },]

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col className="p-0">
            <div
              className="skill-bx"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
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
                {techs.map((el, idx) => (
                  <div className="item" key={idx}>
                    {el.icon}
                    <h5>{el.tech}</h5>
                  </div>
                ))
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};
