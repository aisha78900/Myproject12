import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Group 13 (1).png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { SiUpwork, SiFiverr } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with AI and programming, and I've learned (and keep learning) every day 🤖✨
              <br />
              <br />I work with
              <i>
                <b className="purple"> Python, Machine Learning, and Deep Learning </b>
              </i>
              frameworks.
              <br />
              <br />
              My main interests are building &nbsp;
              <i>
                <b className="purple">AI-powered applications, intelligent systems, </b> and
                <b className="purple">
                  research-driven solutions.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion to create projects
              with <b className="purple">TensorFlow, PyTorch,</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern AI tools
                </b>
              </i>
              , turning complex ideas into
              <i>
                <b className="purple"> practical products</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aisha78900"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/aishaowais7890"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayeshaowais.7890/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01210b08548a39ac07?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/s/P2r1DmE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiFiverr />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
