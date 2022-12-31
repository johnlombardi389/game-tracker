import { useNavigate } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { fadeIn, popIn, slideIn } from "../animations";
// Images
import playstation from "../assets/images/playstation.svg";
import nintendo from "../assets/images/nintendo.svg";
import xbox from "../assets/images/xbox.svg";
import steam from "../assets/images/steam.svg";
import apple from "../assets/images/apple.svg";
import gamepad from "../assets/images/gamepad.svg";
import starEmpty from "../assets/images/star-empty.png";
import starFull from "../assets/images/star-full.png";

function GameDetail({ pathId }) {
  // Exit detail
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Get star rating
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return stars;
  };

  // Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <DetailCard variants={slideIn} initial="hidden" animate="show">
            <Stats>
              <div className="title">
                <h3>{game.name}</h3>
              </div>
              <Platforms>
                <ul>
                  {game.platforms.map((data) => (
                    <li key={data.platform.id}>
                      <p>{data.platform.name}</p>
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                      />
                    </li>
                  ))}
                </ul>
              </Platforms>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Stars>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </Stars>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt={screen.image}
                  key={screen.id}
                />
              ))}
            </div>
          </DetailCard>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const DetailCard = styled(motion.div)`
  width: 80%;
  margin: 7rem;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  h3 {
    font-size: 3rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Platforms = styled(motion.div)`
  ul {
    display: flex;
    list-style: none;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-right: 3rem;
    }
  }
  img {
    margin: 0rem 1rem;
  }
`;

const Stars = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 3rem 0rem;
  p {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
