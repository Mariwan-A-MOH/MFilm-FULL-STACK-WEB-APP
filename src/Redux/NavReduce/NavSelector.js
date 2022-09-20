import { createSelector } from 'reselect';
const SelectNav=(state)=>state.Navbar;
export const ShowSelector=createSelector(SelectNav,Navbar=>Navbar.Show?true:false)