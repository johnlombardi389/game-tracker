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

  console.log(game);

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

            <InfoBar>
              <div className="developers">
                <p>Developers:</p>
                <ul>
                  {game.developers.map((data) => (
                    <li key={data.id}>{data.name}</li>
                  ))}
                </ul>
              </div>
              <div className="publisher">
                <p>Publishers:</p>
                <ul>
                  {game.publishers.map((data) => (
                    <li key={data.id}>{data.name}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="website-link">
                <p>Website:</p>
                <a href={game.website} target="_blank">
                  {game.name}
                </a>
              </div> */}
            </InfoBar>
            {/* <Stars>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </Stars> */}

            <Description>
              <h4>Description</h4>
              <p>{game.description_raw}</p>
              {game.released ? <p>Released: {game.released}</p> : ""}
              <p>
                Learn more about the game at by visiting the{" "}
                <a href={game.website} target="_blank">
                  {game.name} website
                </a>
                .
              </p>
            </Description>

            <Genres>
              <h4>Genres</h4>
              <ul>
                {game.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </Genres>

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
  margin: 0 auto;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  h3 {
    font-size: 3rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 4rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 1.5rem 3rem;
  }
  @media (max-width: 700px) {
    padding: 1rem 1.5rem;
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0.25rem 0.75rem;
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
    flex-wrap: wrap;
    list-style: none;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 3rem;
      margin-top: 1rem;
      padding: 0.5rem;
      background: transparent;
      border-radius: 0.25rem;
      border: 1px solid #393146;
      p {
        padding-left: 1rem;
        color: black;
      }
    }
  }
  img {
    margin: 0rem 1rem;
  }
  @media (max-width: 1500px) {
    ul {
      li {
        margin-right: 1.2rem;
        padding: 0.25rem 0rem;
        p {
          padding-left: 0.8rem;
        }
      }
    }
    img {
      margin: 0rem 0.5rem;
    }
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
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;

const InfoBar = styled(motion.div)`
  background: linear-gradient(
    45deg,
    rgba(109, 58, 234, 0.75),
    rgba(64, 177, 196, 0.75)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      padding-right: 1.3rem;
      font-family: "Mulish", sans-serif;
      font-size: 1.1rem;
    }
  }
  p {
    font-family: "Play", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: black;
  }
  @media (max-width: 1300px) {
    padding: 0.5rem 1.5rem;
    ul {
      li {
        padding-right: 1rem;
        font-size: 0.8rem;
      }
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
  h4 {
    font-family: "Play", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #393146;
    margin-bottom: 1rem;
  }
  p {
    font-family: "Mulish", sans-serif;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: black;
  }
  a {
    text-decoration: underline;
    &:hover {
      color: #40d334;
    }
  }
`;

const Genres = styled(motion.div)`
  margin: 3rem 0rem;
  h4 {
    font-family: "Play", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #393146;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 1rem;
      margin-top: 1rem;
      padding: 0.5rem;
      background: #393146;
      border-radius: 0.25rem;
      color: white;
      font-family: "Mulish", sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`;

export default GameDetail;
