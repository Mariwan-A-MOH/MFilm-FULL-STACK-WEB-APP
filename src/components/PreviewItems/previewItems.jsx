import React, { useState } from "react";
import Slider from "react-slick";
import Item from "../Items/Items";
import "./previewsItems.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PreviewItem = ({ collection }) => {
  // real data
  const { title, items, Route_Url } = collection;

  const [ImageIndex, setImageindex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return <div className="arrow2 next2" onClick={onClick}></div>;
  };
  const PrevArrow = ({ onClick }) => {
    return <div className="arrow2 prev2" onClick={onClick}></div>;
  };

  const Setting = {
    // dots: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    lazyload: true,
    speed: 10000,
    variableWidth: true,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageindex(next);
    },
  };

  return (
    <div className="SliderPage2">
      <Title to={Route_Url}>{title}</Title>
      <Slider {...Setting}>
        {items.map((item, index) => (
          <div className={"slide2"}>
            <Item key={index} item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PreviewItem;
const Title = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  color: rgb(53, 76, 99);
  font-weight: 800;
  &:hover {
    color: rgb(71, 91, 112);
  }
`;
