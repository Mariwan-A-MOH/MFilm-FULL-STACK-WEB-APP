import { UserType } from "./UserTypeAction";

const Initial_state={
  current_user:null,
  man:'akram'
}
 const Current_User=(state=Initial_state,action)=>{
  switch(action.type){
    case UserType.Current_User_TypeAction:
      return ({
        ...state,
        current_user:action.payload
      })
    default:return state;
  }
}
export default Current_User;