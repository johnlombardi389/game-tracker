import { NavLink } from "react-router-dom";
// Style
import styled from "styled-components";
// Icons
import {
  FaYoutube,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter>
      <Row>
        <div>
          <h5>Recipes</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <h5>Services</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <h5>Discover</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <p>Company Name</p>
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
              <FaTiktok />
            </li>
          </Socials>
        </div>
      </Row>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: #fbbb62;
  padding: 2% 20%;
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
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  svg {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
    color: #0f423b;
  }
  p {
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: black;
  }
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    color: #0f423b;
    width: 2rem;
    height: 2rem;
  }
`;

export default Footer;
