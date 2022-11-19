import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../../assets/img/header-img.svg";
import "./index.scss";

export const Banner = () => {
  const toRotate = [
    "Front-end Developer",
    "Back-end Developer",
    "Web Designer",
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [stickPulsing, setStickPulsing] = useState("|");
  const [delta, setDelta] = useState(
    300 - (Math.random() * (200 - 50 + 1) + 50)
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    if (isDeleting) setDelta((prev) => prev / 1.3);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(600);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(300);
    }

    setText(updatedText);
  };

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to My Portfolio</span>

            <h1>
              {"Hi I'm Diogo Jorge "}
              <span className="wrap">
                {text}
                <span className="cursor">{stickPulsing}</span>
              </span>
            </h1>

            <p>
              Olá me chamo Diogo, tenho 17 anos, apaixonado por programação,
              desevolvo aplicações Fullstack Javascript, e curso técnico de
              informática para internet.
            </p>

            <button onClick={() => alert("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
