import React, { useRef } from "react";
import styled from "styled-components";

const Main = () => {
  const titleRef = useRef();
  const handleMouseMove = (rotate) => {
    let x = (window.innerWidth / 2 - rotate.clientX) / 18;
    let y = (window.innerHeight / 2 - rotate.clientY) / 8;
    titleRef.current.style.transform =
      "rotateY(" + -x + "deg) rotateX(" + y + "deg)";
  };
  const handleMouseOut = () => {
    titleRef.current.style.transform = "rotate(0)";
  };
  return (
    <MainS>
      <div id="main">
        <main className="main_m">
          <div
            className="container"
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
          >
            <p className="title" ref={titleRef}>
              HELLO, I'M A <br />
              FRONT-END DEVELOPER <br /> <span>SeungHyeon</span>
            </p>
          </div>
        </main>
      </div>
    </MainS>
  );
};

const MainS = styled.div`
  #main {
    /* width: 100vw;
    height: 100vh;
    background: #111;
    max-width: 100%;
    z-index: 999; */
    .main_m {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .container {
        perspective: 1000px;
        width: 100%;
        max-width: 1200px;
        padding: 100px;
        position: relative;
        .title {
          perspective: 5000px;
          text-align: center;
          font-family: "Antonio", sans-serif;
          font-size: 80px;
          cursor: default;
          transition: 0.3s ease-out;
          color: #111;
          span {
            font-family: "Allura", cursive;
            font-size: 100px;
            color: #f8ba22;
            position: relative;
            top: -100px;
            &:hover {
              text-shadow: 5px 5px 20px #f7c64b;
            }
          }
        }
      }
    }
  }
`;

export default Main;
