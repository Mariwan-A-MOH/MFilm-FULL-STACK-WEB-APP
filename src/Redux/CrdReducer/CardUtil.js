export const AddCard = (FilmList, item) => {
  if (FilmList.length > 0) {
    const found = FilmList.find((elem) => {
      return elem.id == item.id ? true : false;
    });
    return found ? [...FilmList] : [...FilmList, item];
  } else {
    return [item];
  }
};
export const RemoveFilm = (FilmList, item) => {
  const newFilmList = FilmList.filter((element) => {
    if (element.id != item.id) {
      return element;
    }
  });
  return [...newFilmList];
};
