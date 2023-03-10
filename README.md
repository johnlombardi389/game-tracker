# Game Tracker Website

![Screenshot](https://user-images.githubusercontent.com/67701361/210438888-afde00da-39f8-4b29-95a5-e8ce3452dacd.png)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Tools](#tools)
  - [What I learned](#what-i-learned)
  - [Example Code](#example-code)
- [Features](#features)
- [Author](#author)
- [Credits](#credits)

## Overview

This is a gaming website that allows users to discover and learn about upcoming games, view popular titles, and search for specific games of interest. The website is built using React, Redux, and Styled-Components, and utilizes a REST API to retrieve data. With this platform, users can easily stay informed about the latest releases and trends in the gaming industry.

### Links

- Live Site URL: [Game Tracker Website](https://johnlombardi389.github.io/game-tracker/)

---

## My process

### Tools

- React
- Redux
- REST API
- Styled-Components / Sass
- React Router
- Axios
- Framer Motion
- CSS Grid
- Vite
- Git

### What I learned

- Building a React application with Redux
- Combining multiple reducers into one Redux store
- How to implement a REST API in a web application and display its data in a user-friendly way
- Using styled-components to style content and make pages responsive

### Example Code

Redux action and reducer from the project:

```javascript
export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
```

```javascript
const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
```

---

## Features

- Search for specific games

![Screenshot](https://user-images.githubusercontent.com/67701361/210440119-73dc3e39-c098-4793-bc36-f7e9da71e745.png)

- View game details

![Screenshot](https://user-images.githubusercontent.com/67701361/210440280-f1738832-3fd5-433d-bd0a-a6aef657dc50.png)
![Screenshot](https://user-images.githubusercontent.com/67701361/210440492-7fb3ad0b-c74f-4aa2-a531-e225ff2cb3a9.png)
![Screenshot](https://user-images.githubusercontent.com/67701361/210440565-418112a6-0fe6-4ec4-8c47-517b8309955e.png)

- Footer with extra links

![Screenshot](https://user-images.githubusercontent.com/67701361/210439432-33d1d892-dabf-43f7-a519-32c1a86f2b1d.png)

- Responsive to different screen sizes

![Screenshot](https://user-images.githubusercontent.com/67701361/210440723-8c9bf101-b378-4a55-985a-4a76420237cb.png)
![Screenshot](https://user-images.githubusercontent.com/67701361/210440840-d87099bb-26ee-4ef1-965b-80976404b15d.png)
![Screenshot](https://user-images.githubusercontent.com/67701361/210440911-a09865b6-f30d-4a17-81a9-489a41017663.png)

---

## Author

John Lombardi

- [Portfolio](https://johnlombardi389.github.io/portfolio/)
- [LinkedIn](https://www.linkedin.com/in/johnlombardi389/)
- [GitHub](https://github.com/johnlombardi389)

## Credits

- All game data is from the [RAWG Video Games Database REST API](https://rawg.io/)
- SVG Background from [SVG Backgrounds](https://www.svgbackgrounds.com/)
