import { useState } from "react";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
// Icons
import { RiGameFill } from "react-icons/ri";

function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault(); // Stop page from refreshing on submit
    dispatch(fetchSearch(textInput));
    setTextInput(""); // Set input back to nothing after submit
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <RiGameFill />
        <h1>Game Pac</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  background: linear-gradient(
    45deg,
    rgba(109, 58, 234, 0.75),
    rgba(64, 177, 196, 0.75)
  );
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    margin: 1rem 0rem;
  }
  button {
    font-size: 1.5rem;
    border: 1px solid #393146;
    padding: 0.5rem 2.5rem;
    cursor: pointer;
    background-color: #393146;
    color: white;
  }
  @media (max-width: 1400px) {
    input {
      width: 50%;
    }
  }
  @media (max-width: 650px) {
    padding: 2rem 1rem;
    input {
      width: 50%;
    }
    button {
      padding: 0.5rem 1rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
    color: #40d334;
    transition: transform 0.5s;
  }
  h1 {
    font-family: "Play", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
  }
  &:hover {
    svg {
      transform: translateX(20px);
    }
  }
`;

export default Nav;
