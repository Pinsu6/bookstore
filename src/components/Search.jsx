import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Search({ search }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book, setBook] = useState([]);
  console.log("data is ", search);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book/");

        const data = response.data.filter((data) => data.name === search);
        setBook(data);
      } catch (error) {
        console.log("error from course", error);
      }
    };
    getBook();
  }, [search]);

  return (
    <div
      style={{ height: "100vh", background: "black" }}
      className=" grid grid-cols-1 md:grid-cols-1"
    >
      <div className="slider-container ">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards items={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Search;
