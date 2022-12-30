import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { popIn } from "../animations";
// Icons
import { GiRoundStar } from "react-icons/gi";

function Game({ name, released, image, rating, id }) {
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
        <Info>
          <p>Release Date: {released}</p>
          <Star>
            <GiRoundStar />
            <p>{rating}</p>
          </Star>
        </Info>
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

const Info = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3rem;
`;

const Star = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: relative;
    width: 3rem;
    height: 3rem;
  }
  p {
    position: absolute;
    z-index: 2;
    color: pink;
    font-size: 0.75rem;
  }
`;

export default Game;
