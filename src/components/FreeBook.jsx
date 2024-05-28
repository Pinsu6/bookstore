import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function FreeBook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book/");

        const data = response.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log("error from course", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl  containern mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-bold text-xl pb-2">Free course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            delectus eveniet amet perspiciatis quod libero ipsam facere
            recusandae odio velit!
          </p>
        </div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {book.map((item) => (
                <Cards items={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
