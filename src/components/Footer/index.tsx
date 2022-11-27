import { Col, Container, Row } from "react-bootstrap";
import footIcon1 from "../../assets/img/nav-icon1.svg";
import footIcon2 from "../../assets/img/nav-icon2.svg";
import footIcon3 from "../../assets/img/nav-icon3.svg";
import logo from "../../assets/img/logo.svg";
import './index.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <Row className='w-100'>
        <Col className='logo-container'>
          <img src={logo} alt="Logo" />
        </Col>

        <Col className="text-center text-sm-end">
          <div className="social-icons">
            <a href=""><img src={footIcon1} /></a>

            <a href=""><img src={footIcon2} /></a>

            <a href=""><img src={footIcon3} /></a>
          </div>

          <p>CopyRight 2022. All Right Reserved</p>
        </Col>
      </Row>
    </footer>
  );
};
