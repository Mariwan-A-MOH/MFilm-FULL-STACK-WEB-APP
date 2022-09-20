import { UserType } from "./UserTypeAction"

export const Current_User_Action=(UserDaat)=>({
  type:UserType.Current_User_TypeAction,
  payload:UserDaat
})