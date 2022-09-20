import { CardTypeAction } from "./CardActionType";
import { AddCard, RemoveFilm } from "./CardUtil";
const Initial_state = {
  hidden: false,
  ProShow: false,
  FilmList: [],
};
const CardReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CardTypeAction.Card_Hidden:
      return { ...state, hidden: !state.hidden };
    case CardTypeAction.Card_Pro_Hidden:
      return { ...state, ProShow: !state.ProShow };
    case CardTypeAction.Add_Film_To_List:
      return { ...state, FilmList: AddCard(state.FilmList, action.payload) };
    case CardTypeAction.Remove_Film_In_List:
      return { ...state, FilmList: RemoveFilm(state.FilmList, action.payload) };
    default:
      return state;
  }
};
export default CardReducer;
