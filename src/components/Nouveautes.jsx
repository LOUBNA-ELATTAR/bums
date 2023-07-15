import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Nouveautes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="py-10 bg-white-100">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <Slider {...settings}>
            <div>
              <img src="./image1.jpg" alt="" className="w-full" />
            </div>
            <div>
              <img src="./image1.jpg" alt="" className="w-full" />
            </div>
            <div>
              <img src="./image1.jpg" alt="" className="w-full" />
            </div>
          </Slider>
        </div>
        <div className="w-full md:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-bold">Nouveautés</h1>
          <p className="text-xs md:text-sm text-gray-400">
          Découvrez nos dernières nouveautés littéraires ! Dans cette section, nous vous présentons les nouveaux 
          livres qui ont rejoint notre collection. Plongez dans un carrousel captivant où chaque livre est mis en avant 
          avec une image de couverture attrayante et son titre accrocheur. <br></br>
          N'hésitez pas à parcourir notre carrousel et à découvrir les dernières pépites qui ne demandent qu'à être dévorées.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nouveautes;
