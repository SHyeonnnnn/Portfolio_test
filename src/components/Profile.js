import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const Profile = () => {
  return (
    <ProfileS>
      <div id="profile">
        <section className="profile_c">
            <motion.div
              initial={{opacity:0}}
              whileInView={{y:[300, 0], opacity:1}}
              transition={{duration: 0.8}}
              >
              <h1>About Me</h1>
            </motion.div>
          <div className="flex">
            <div className="flex">
              <section className="pic">
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{x:[-500, 0], opacity:1}}
                  transition={{duration: 1.3}}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_960_720.jpg"
                    alt=""
                  />
                </motion.div>
              </section>
            </div>
            <div className="information">
              <section className="text">
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{x:[600, 0], opacity:1}}
                  transition={{duration: 1.8, delay:1}}
                >
                  <p>name : 강승현</p>
                  <p>birth : 1993.05.07</p>
                  <p>education : </p>
                  <p className="intro">
                    하루하루 발전하는 프론트엔드 개발자 입니다. 하루하루 발전하는
                    프론트엔드 개발자 입니다.
                  </p>
                </motion.div>
              </section>
              <section className="skills">
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{x:[600, 0], opacity:1}}
                  transition={{duration: 1.5, delay:1.5}}
                >
                  <h3>My skills</h3>
                  <div className="skill">
                    <span>html</span>
                    <span>scss</span>
                    <span>Jquery</span>
                    <span>Javascript</span>
                    <span>react</span>
                    <span>vue</span>
                    <span>TypeScript</span>
                  </div>
                </motion.div>
              </section>
              <section className="skills">
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{x:[600, 0], opacity:1}}
                  transition={{duration: 1.5, delay:2}}
                >
                  <h3>My Tools</h3>
                  <div className="skill">
                    <span>git</span>
                    <span>axios</span>
                    <span>api</span>
                    <span>figma</span>
                    <span>zeplin</span>
                    <span>postman</span>
                    <span>node</span>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </ProfileS>
  );
};

const ProfileS = styled.div`
  #profile {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background: #f9f9f9;
    color: #111;
    padding: 20px;
    .profile_c {
      width: 90vw;
      margin: 30px auto 0 auto;
      h1 {
        font-size: 50px;
        text-align: center;
        font-family: Antonio, sans-serif;
        margin-bottom: 130px;
        span {
          border-bottom: 3px double #ddd;
          padding: 0 30px;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.25);
        }
      }
      .flex {
        display: flex;
        .flex {
          margin-right: 30px;
          .pic {
            img {
              width: 500px;
              height: auto;
              display: block;
            }
          }
        }
        .information {
          .text {
            padding: 0 20px 0 0;
            p {
              font-size: 17px;
              text-transform: uppercase;
              margin-bottom: 40px;
            }
          }
          .skills {
            h3 {
              font-size: 24px;
              border-bottom: 3px double #ddd;
              padding-bottom: 8px;
            }
            .skill {
              display: flex;
              padding: 16px;
              justify-content: space-between;
              span {
                text-transform: uppercase;
                font-size: 16px;
                width: 100px;
                height: 100px;
                background-color: #fff;
                color: #222;
                display: block;
                text-align: center;
                border-radius: 50%;
                line-height: 100px;
                &:nth-child(1) {
                  border: 3px solid #d97070;
                }
                &:nth-child(2) {
                  border: 3px solid #bbd970;
                }
                &:nth-child(3) {
                  border: 3px solid #70d979;
                }
                &:nth-child(4) {
                  border: 3px solid #70d9cd;
                }
                &:nth-child(5) {
                  border: 3px solid #70a1d9;
                }
                &:nth-child(6) {
                  border: 3px solid #b870d9;
                }
                &:nth-child(7) {
                  border: 3px solid #d9709d;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Profile;
