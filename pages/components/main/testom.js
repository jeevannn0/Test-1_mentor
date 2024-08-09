import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../../../public/ui/button";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, 
    autoplaySpeed: 0,  
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    appendDots: dots => (
      <div className="flex justify-center mt-8">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl  font-bold">Top Reiviews</h1>
        
          
        </div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="px-4">
              <div className="bg-[#e6e6e6] h-[350px] text-black rounded-xl"> {/* Reduced height */}
                <div className='h-28 bg-blue-500 opacity-75 flex justify-center items-center rounded-t-xl'> {/* Reduced height */}
                  <img src={d.img} alt="" className="h-24 w-24 rounded-full"/> {/* Adjusted image size */}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <Button className='bg-blue-500 text-white mt-7 text-lg px-6 py-1 rounded-xl'>Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/placeholder.svg`,
    review: `Lorem ipsum dolor sit amet,  labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/placeholder.svg`,
    review: `Lorem ipsum dolor sit amet,  labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/placeholder.svg`,
    review: `Lorem ipsum dolor sit amet,  labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/placeholder.svg`,
    review: `Lorem ipsum dolor sit amet,  labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/placeholder.svg`,
    review: `Lorem ipsum dolor sit amet,  labore et dolore magna aliqua.`
  },
];

export default Testimonial;
