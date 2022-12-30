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
        <h1>Games</h1>
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
  padding: 2rem 5rem;
  text-align: center;
  background: linear-gradient(45deg, #6d3aea, #40b1c4);
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: 1px solid #393146;
    padding: 0.5rem;
    cursor: pointer;
    background-color: #393146;
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  svg {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
    color: #40d334;
  }
  h1 {
    font-family: "Play", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
  }
`;

export default Nav;
