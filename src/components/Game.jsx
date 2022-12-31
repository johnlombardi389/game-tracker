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

  const ratingColor = (rating) => {
    let color = "";
    if (rating >= 4) {
      color = "#40d334";
    } else if (rating <= 2) {
      color = "#C31B18";
    } else {
      color = "#FBE104";
    }
    return color;
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
            <GiRoundStar style={{ color: ratingColor(rating) }} />
            <p>{Math.round(rating * 10) / 10}</p>
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
  text-align: left;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  h3 {
    padding: 1rem 0 0 2rem;
    color: #393146;
  }
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  p {
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
  }
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
    color: black;
    font-size: 0.75rem;
    transform: translateY(5%);
    font-family: "Mulish", sans-serif;
    font-weight: 400;
  }
`;

export default Game;
