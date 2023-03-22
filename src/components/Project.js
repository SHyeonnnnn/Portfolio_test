import React, { useState /* useRef */ } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Project = () => {
  const [color, setColor] = useState(true);
  const handleMouseOver = () => {
    setColor(false);
  };
  const handleMouseOut = () => {
    setColor(true);
  };

  /* const projectRef = useRef();
    const handleMouseOver = () => {
        projectRef.current.src = "./img/con_color.png";
    }
    const handleMouseOut = () => {
        projectRef.current.src = "./img/con_black.png";

    } */

  return (
    <ProjectS>
      <div id="project">
        <main className="project_m">
          <div className="pro_list">
            <h2>
              <span>PROJECT</span>
            </h2>
            <Link
              to="/kocca"
              className="pro_item project1"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <h3>
                01. <span className="kr_font">한국콘텐츠진흥원</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # jquery
                <br /> # 반응형
              </p>
              <img src="./img/project-graphics1.svg" alt="frame" />
              <img
                className={color ? "black detail_photo" : "detail_photo"}
                src="./img/con_color.png"
                alt="img" /* ref={projectRef} */
              />
            </Link>
            <Link to="/megabox" className="pro_item project2">
              <h3>
                02. <span className="kr_font">MEGABOX</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # javascript
              </p>
              <img src="./img/project-graphics2.svg" alt="img" />
              <img
                className="detail_photo"
                src="./img/megabox_color.png"
                alt=""
              />
            </Link>
            <Link to="/sumgo" className="pro_item project3">
              <h3>
                03. <span className="kr_font">숨고</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # jquery
              </p>
              <img src="./img/project-graphics3.svg" alt="img" />
              <img
                className="detail_photo"
                src="./img/soomgo_color.png"
                alt=""
              />
            </Link>
            <Link to="todolist" className="pro_item project4">
              <h3>
                04. <span className="kr_font">TO DO LIST</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # vue
              </p>
              <img src="./img/project-graphics4.svg" alt="img" />
              <img className="detail_photo" src="./img/con_color.png" alt="" />
            </Link>
            <Link to="cointracker" className="pro_item project5">
              <h3>
                05. <span className="kr_font">COIN TRACKER</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # jquery
              </p>
              <img src="./img/project-graphics5.svg" alt="img" />
              <img className="detail_photo" src="./img/con_color.png" alt="" />
            </Link>
            <Link to="trello" className="pro_item project6">
              <h3>
                06. <span className="kr_font">TRELLO</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # jquery
              </p>
              <img src="./img/project-graphics6.svg" alt="img" />
              <img className="detail_photo" src="./img/con_color.png" alt="" />
            </Link>
            <Link to="netflix" className="pro_item project7">
              <h3>
                07. <span className="kr_font">NETFLIX</span>
              </h3>
              <p>
                # HTML <br /> # css <br /> # react
              </p>
              <img src="./img/project-graphics7.svg" alt="img" />
              <img className="detail_photo" src="./img/con_color.png" alt="" />
            </Link>
          </div>
        </main>
      </div>
    </ProjectS>
  );
};

const ProjectS = styled.div`
  #project {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background: #fff;
    color: #111;
    padding: 20px;
    .project_m {
      perspective: 1000px;
      width: 1534px;
      margin: 90px auto 0 auto;
      .pro_list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 20px;
        h2 {
          font-size: 78px;
          margin-right: 100px;
          margin-bottom: 60px;
          letter-spacing: 10px;
          span {
            border-bottom: 3px double #111;
            text-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
          }
        }
        .pro_item {
          width: 290px;
          height: 370px;
          position: relative;
          margin-right: 60px;
          margin-bottom: 60px;
          padding: 20px;
          h3 {
            font-size: 22px;
            font-family: Antonio, san-serif;
          }
          p {
            margin-top: 10px;
          }
          img {
            width: 200px;
            position: absolute;
            bottom: 0;
            right: 0;
            &.detail_photo {
              position: absolute;
              width: 170px;
              bottom: 20px;
              right: 20px;
            }
            &.black {
              filter: grayscale(100%);
            }
          }
          &.project1 {
            background: #f27474;
          }
          &.project2 {
            background: #edda5e;
          }
          &.project3 {
            background: #a2ef49;
          }
          &.project4 {
            background: #47f19c;
          }
          &.project5 {
            background: #3d46f8;
          }
          &.project6 {
            background: #db2ff2;
          }
          &.project7 {
            background: #fa48a1;
          }
        }
      }
    }
  }
`;

export default Project;
