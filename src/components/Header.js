import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderS>
      <header className="header">
        <Link to="line" spy={true} smooth={true}>
          <h1>Hyeon</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="line" spy={true} smooth={true}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="profile" spy={false} smooth={true}>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true}>
                <span>Project</span>
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderS>
  );
};
const HeaderS = styled.div`
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    padding: 0 20px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    h1 {
      font-size: 30px;
    }
    nav {
      ul {
        display: flex;
        li {
          a,
          span {
            display: block;
            padding: 10px 20px;
            color: #efefef;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
  }
`;

export default Header;
