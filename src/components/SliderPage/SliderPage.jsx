import React, { useState } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./slider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import ShowItem from "../ShowItem/ShowItem";
const SliderPage = () => {
  // real data
  const items = [
    {
      id: 11,
      name: "The Batman",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/adb49794a3877207783f1fbccad15964bdf4209c1f72b7f758f12ddd74f24c33._UY500_UX667_RI_V_TTW_.jpg",
      image_item:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
      description:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question",
    },
    {
      id: 12,
      name: "The Adam Project",
      image: "https://aztechin.com/en/wp-content/uploads/2022/03/adam.jpg",
      image_item:
        "https://qesatt-felem.org/wp-content/uploads/2022/03/The-Adam-Project-2022.jpg",

      description:
        "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future",
    },
    {
      id: 13,
      name: "1917",
      image:
        "https://dkfhw9rzsr80z.cloudfront.net/NBC-SG-001-A1226/artworks/posters/NBC-SG-001-A1226-P704.jpg?hash=1587022526000",
      image_item:
        "https://theflucobeat.com/wp-content/uploads/2020/02/1917poster.jpg",
      description:
        "Two young British privates during the First World War are given an impossible mission: deliver ... April 6th, 1917. As an infantry battalion assembles to wage war ...",
    },
    {
      id: 14,
      name: "The Man from Toronto",
      image:
        "https://cdn.theplaylist.net/wp-content/uploads/2022/06/01100311/man-from-toronto.jpg",
      image_item:
        "https://s.yimg.com/ny/api/res/1.2/ETSESoRyaxW7Iti9BkGa5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xNzc4/https://s.yimg.com/uu/api/res/1.2/fU8waMcxytblGLqhVZv_fg--~B/aD0yMDAwO3c9MTM1MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/entertainment_weekly_785/f161d9dcd8bf7b8b78a290f45f822343",
      description:
        "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin known as The Man from Toronto in hopes of ",
    },
  ];
  const [ImageIndex, setImageindex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight className="icon" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft className="icon" />
      </div>
    );
  };

  const Setting = {
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyload: true,
    variableWidth: true,
    slidesToShow: 3,
    centerMode: true,
    Infinite: true,
    lazyload: true,
    speed: 1200,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageindex(next);
    },
  };

  return (
    <div className="SliderPage">
      <Slider {...Setting}>
        {items
          .filter((ele, ind) => ind < 4)
          .map((element, index) => (
            <div
              className={ImageIndex === index ? "slide activeSlide" : "slide"}
            >
              <ShowItem key={index} item={element} />
            </div>
          ))}
      </Slider>
    </div>
  );
};
const mapstatetoProps = createStructuredSelector({
  // movies: MoveisSelect,
});
export default connect(mapstatetoProps)(SliderPage);
