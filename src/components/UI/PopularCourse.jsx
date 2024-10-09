import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/customSwiper.scss";
import PopularCard from "./PopularCard";
import popular from "../styles/popular.module.scss";
import { useEffect, useState } from "react";

export default function PopularCourse() {
  const [populars, setPopulars] = useState([]);

  async function fetchPopular() {
    const response = await fetch("http://localhost:3030/favs");
    const data = await response.json();
    setPopulars(data);
  }

  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <>
      <div className={`${popular.containers} px-6`}>
        <h2>محبوب ترین ها</h2>
        <div className={popular.cardsContainer}>
          <Swiper
            className="p-10 md:p-10 xl:p-16"
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {populars.map((popular) => (
              <SwiperSlide>
                <PopularCard
                  title={popular.title}
                  image={`http://localhost:3030${popular.image}`}
                  price={popular.price}
                  vote={popular.participants}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
