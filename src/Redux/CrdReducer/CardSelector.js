import { createSelector } from "reselect";
const CardData = (state) => state.Card;
export const CardSelector = createSelector(CardData, (Card) =>
  Card.hidden ? true : Card.hidden
);
export const ProShowSelector = createSelector(CardData, (Card) =>
  Card.ProShow ? true : false
);
export const FilmList_Selector = createSelector(CardData, (Card) =>
  Card.FilmList.length > 0 ? Card.FilmList : []
);
