import { NavTypeAction } from "./Navtype";
const Initial_State = {
  Show: false,
};
 const NavReducer = (state = Initial_State, action) => {
switch(action.type){
  case NavTypeAction.ShowTpye:
    return({
      ...state,
      Show:!state.Show
    })
    default:
      return state
}
  
};
export default NavReducer;