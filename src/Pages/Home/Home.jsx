import React, { Component, useState, useEffect } from "react";
import SliderPage from "../../components/SliderPage/SliderPage";
import { connect } from "react-redux";
import { CollectionSelect } from "../../Redux/AllDatas/ALLDataSelector";
import { createStructuredSelector } from "reselect";
import PreviewItem from "../../components/PreviewItems/previewItems";
import styled from "styled-components";
import { FilmList_Selector } from "../../Redux/CrdReducer/CardSelector";

import ScaleLoader from "react-spinners/ScaleLoader";
const Home = ({ Collections }) => {

  return (
    <CONdiv>
      <SliderPage />
      {Collections.length>0 ? (
        Collections.map((collection, index) => (
          <PreviewItem key={index} collection={collection} />
        ))
      ) : (
        <DivSpinner>
          <ScaleLoader
            color={"rgba(55,90,114,50)"}
            loading={true}
            height={100}
            margin={5}
            speedMultiplier={1}
            width={3}
          />
        </DivSpinner>
      )}
    </CONdiv>
  );
};
const mapStateToProps = createStructuredSelector({
  Collections: CollectionSelect,
  FilmList: FilmList_Selector,
});
export default connect(mapStateToProps)(Home);
const CONdiv = styled.div`
  width: 100%;
`;
const DivSpinner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
