import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
    },
  });
};
