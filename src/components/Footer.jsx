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
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

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
          <h5>About</h5>
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
          <NavLink to="/game-tracker" onClick={scrollTop}>
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
  background: linear-gradient(
    45deg,
    rgba(64, 177, 196, 0.75),
    rgba(109, 58, 234, 0.75)
  );
  padding: 2% 20%;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.3);
  @media (max-width: 1400px) {
    padding: 2% 10%;
  }
  @media (max-width: 1000px) {
    padding: 2% 1rem;
  }
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
  @media (max-width: 1400px) {
    h5 {
      font-size: 1rem;
    }
  }
  @media (max-width: 600px) {
    display: block;
    text-align: center;
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
  @media (max-width: 1400px) {
    li {
      font-size: 0.85rem;
      line-height: 2rem;
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
    transition: transform 0.5s;
  }
  &:hover {
    svg {
      transform: translateX(20px);
    }
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
  @media (max-width: 750px) {
    justify-content: space-around;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default Footer;
