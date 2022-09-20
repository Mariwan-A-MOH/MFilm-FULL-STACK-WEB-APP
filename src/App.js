import React, { Component } from "react";

import Header from "./components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./components/Sign-IN/Sign_In";
import { onAuthStateChanged } from "firebase/auth";
import { auth, UserDocument, GetDataFb } from "./Server/firebase";
import SignUp from "./components/Sign_Up/Sign_up";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DataSelect } from "./Redux/AllDatas/ALLDataSelector";
import { DataFetchAction } from "./Redux/AllDatas/DataAction";
import { Current_User_Action } from "./Redux/UserReducer/UserAction";
import Current_UserSelector from "./Redux/UserReducer/UserSelector";
import ViewsMovies from "./components/Views/ViewsMovies";
import ViewsSeries from "./components/Views/ViewsSeries";
import ItemDisplay from "./components/ItemDisplay/ItemDisplay";

class App extends Component {
  unsub = null;
  Fetch = async (dispatch) => {
    const Data = await GetDataFb();
    dispatch(DataFetchAction(Data));
  };
  componentDidMount() {
    const { dispatch } = this.props;
    this.unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const UserDocRef = await UserDocument(user);
        onSnapshot(UserDocRef, (UserDocData) => {
          dispatch(
            Current_User_Action({ id: UserDocData.id, ...UserDocData.data() })
          );
        });
      }
    });
    this.Fetch(dispatch);
  }
  componentWillUnmount() {
    this.unsub = null;
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign"
            element={
              Object.keys(currentUser).length > 0 ? (
                <Navigate to="/" replace />
              ) : (
                <SignIn />
              )
            }
          />
          <Route
            path="/sign-up"
            element={
              Object.keys(currentUser).length > 0 ? (
                <Navigate to="/" replace />
              ) : (
                <SignUp />
              )
            }
          />
          <Route path="/view/movies" element={<ViewsMovies />} />
          <Route path="/view/series" element={<ViewsSeries />} />

          <Route path="/item/:id" element={<ItemDisplay />} />
        </Routes>
      </div>
    );
  }
}
const MapStateToProps = createStructuredSelector({
  Data: DataSelect,
  currentUser: Current_UserSelector,
});
export default connect(MapStateToProps)(App);
