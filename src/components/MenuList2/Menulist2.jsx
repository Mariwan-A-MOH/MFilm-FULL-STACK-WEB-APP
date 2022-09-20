import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import { useNavigate } from "react-router-dom";
import { ShowSelector } from "../../Redux/NavReduce/NavSelector";
import { CollectionSelect } from "../../Redux/AllDatas/ALLDataSelector";
const MenuList2 = ({ Collections, Show }) => {
  const LinkTo = useNavigate();
  const Icon = {
    movies: <SlideshowIcon style={{ fill: "white", fontSize: 30 }} />,
    series: <LiveTvIcon style={{ fill: "white", fontSize: 30 }} />,
  };
  return (
    <DIVcon Show={Show}>
      <ul>
        {Collections.map((element, index) => {
          return (
            <li onClick={() => LinkTo(element.Route_Url)}>
              <div>{Icon[element.title]}</div>

              <p className="textlink">{element.title}</p>
            </li>
          );
        })}
      </ul>
    </DIVcon>
  );
};
const MapStateToProps = createStructuredSelector({
  Collections: CollectionSelect,
  Show: ShowSelector,

});
export default connect(MapStateToProps)(MenuList2);

const DIVcon = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;

  z-index: -1;
  background-image: linear-gradient(to right, rgb(16, 17, 19), rgb(47, 49, 60));
  transform: ${(props) => (props.Show ? `translateY(0)` : `translateY(-100%)`)};
  transition: transform 1s;
  padding: 0px 30px 5px 30px;
  display: flex;

  justify-content: flex-start;
  align-items: center;

  /////////////////////
  ul {
    height: 100%;

    list-style: none;
    display: flex;
    gap: 40px;

    align-items: center;
  }
  ul li {
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 15%;

    border-bottom: 1px solid rgb(192, 194, 192);
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    cursor: pointer;
  }
  ul li .textlink {
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(202, 203, 202);
    letter-spacing: 2px;
    font-size: 14px;
  }

  & ul li:hover {
    background-color: #5f63711a;
    color: rgb(232, 238, 244);
    border-bottom: 1px solid rgb(6, 198, 6);

    background-image: linear-gradient(
      to top,
      rgba(6, 198, 6, 0.404),
      rgba(11, 91, 11, 0.299),
      rgba(24, 27, 24, 0.6),
      rgba(16, 17, 19, 0.541),
      rgba(16, 17, 19, 0.541)
    );
  }
`;
