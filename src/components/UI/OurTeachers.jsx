import ourTeachers from "../../components/styles/ourTeachers.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/customSwiper.scss";
import TeacherCard from "./TeacherCard";
import { useEffect, useState } from "react";

export default function OurTeachers() {
  const [teachers, setTeachers] = useState([]);
  async function fetchTeacher() {
    const response = await fetch("http://localhost:3030/instructors");
    const data = await response.json();
    setTeachers(data);
  }

  useEffect(() => {
    fetchTeacher();
  }, []);
  return (
    <>
      <section className={ourTeachers.container}>
        <h2>مدرسین ما</h2>
        <div className={ourTeachers.cardsContainer}>
          <Swiper
            className="p-10 md:p-14 xl:px-24"
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
            {teachers.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <TeacherCard
                  title={teacher.job}
                  img={`http://localhost:3030${teacher.image}`}
                  name={teacher.name}
                  description={teacher.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
