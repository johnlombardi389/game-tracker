import { NavLink } from "react-router-dom";
// Style
import styled from "styled-components";
// Icons
import {
  FaYoutube,
  FaInstagram,
  FaTwitterSquare,
  FaDiscord,
} from "react-icons/fa";
import { RiGameFill } from "react-icons/ri";

function Footer() {
  return (
    <StyledFooter>
      <Row>
        <div>
          <h5>Games</h5>
          <List>
            <li>Explore Tags</li>
            <li>Popular</li>
            <li>Upcoming</li>
            <li>New Games</li>
            <li>Publishers</li>
          </List>
        </div>

        <div>
          <h5>Tutorials</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <h5>Reviews</h5>
          <List>
            <li>PC</li>
            <li>PlayStation</li>
            <li>Xbox</li>
            <li>Nintendo</li>
            <li>Mobile</li>
          </List>
        </div>

        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <RiGameFill />
              <h1>Game Pac</h1>
            </Logo>
          </NavLink>
          <Socials>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaDiscord />
            </li>
          </Socials>
        </div>
      </Row>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin-top: 7rem;
  background: linear-gradient(45deg, #40b1c4, #6d3aea);
  padding: 2% 20%;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.3);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-family: "Play", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 1rem 0rem;
  line-height: 2rem;
  cursor: pointer;
  li {
    font-family: "Play", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.5rem;
    color: #393146;
    transition: all 0.2s;
    &:hover {
      color: white;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  svg {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
    color: #40d334;
  }
  h1 {
    font-family: "Play", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: white;
    padding-right: 1rem;
  }
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    color: white;
    width: 2rem;
    height: 2rem;
    transition: all 0.2s;
    &:hover {
      color: #393146;
    }
  }
`;

export default Footer;
