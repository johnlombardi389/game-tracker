import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

function Home() {
  // Current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location.pathname);

  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, searched, name } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail pathId={pathId} />}

      {searched.length ? (
        <div className="searched">
          <h2>
            {searched.length} results for "{name}"
          </h2>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                rating={game.rating}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            rating={game.rating}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            rating={game.rating}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 650px) {
    padding: 0rem 1rem;
    h2 {
      padding: 3rem 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 650px) {
    min-height: 70vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export default Home;
