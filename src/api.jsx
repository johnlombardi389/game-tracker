// Base URL
const base_url = `https://api.rawg.io/api/games`;

const api_key = `?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;

// Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `&dates=${lastYear},${nextYear}&ordering=-added&page_size=10`;

// Upcoming Games
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;

// New Games
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${api_key}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${api_key}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${api_key}${new_games}`;
export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${api_key}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots${api_key}`;
export const searchGameURL = (game_name) =>
  `${base_url}${api_key}&search=${game_name}&ordering=-rating&page_size=9`;
