import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { popIn } from "../animations";

function Game({ name, released, image, id }) {
  // Load game details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
