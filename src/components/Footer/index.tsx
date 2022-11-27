import { Col, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import footIcon1 from "../../assets/img/nav-icon1.svg";
import footIcon2 from "../../assets/img/nav-icon2.png";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className="w-100">
        <Col className="logo-container">
          <img src={logo} alt="Logo" />
        </Col>

        <Col className="text-center text-sm-end">
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diogo-jorge-br/"
            >
              <img src={footIcon1} />
            </a>

            <a target="_blank" href="https://github.com/DiogoJorge1401">
              <img src={footIcon2} />
            </a>
          </div>

          <p>CopyRight 2022. All Right Reserved</p>
        </Col>
      </Row>
    </footer>
  );
};
