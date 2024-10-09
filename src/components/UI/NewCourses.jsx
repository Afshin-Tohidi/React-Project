import newCourses from "../../components/styles/newCourses.module.scss";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

export default function NewCourses() {
  const [courses, setCourses] = useState([]);
  async function fetchCourses() {
    const response = await fetch("http://localhost:3030/courses");
    const data = await response.json();
    setCourses(data);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className={newCourses.container}>
        <h2>جدیدترین دوره‌های آنلاین</h2>
        <div className={newCourses.cardsContainer}>
          {courses.map((course, key) => {
            if (key <= 5) {
              return (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  tName={course.instructor.name}
                  image={`http://localhost:3030${course.image}`}
                  price={course.price}
                />
              );
            }
          })}
        </div>
        <div className={newCourses.btnContainer}>
          <button className={newCourses.button}>بیشتر</button>
        </div>
      </div>
    </>
  );
}
