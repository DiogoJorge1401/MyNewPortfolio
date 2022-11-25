import { Col } from "react-bootstrap";
import "./index.scss";

interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

export const ProjectCard = ({
  description,
  imgUrl,
  title,
  link,
}: IProjectCard) => {
  return (
    <Col sm={6} md={4}>
      <a className="project-imgbox" href={link} target="_blank">
        <img src={imgUrl} alt="" />

        <div className="project-txts">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};
