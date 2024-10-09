import newCourses from "./../styles/newCourses.module.scss";
import user from "./../../assets/icons/newCourses/user.svg";
import time from "./../../assets/icons/newCourses/time.svg";
import popularArrow from "./../../assets/icons/Popular/popular-arrow.svg";

export default function CourseCard({ title, tName, price, image }) {
  return (
    <div className={newCourses.card}>
      <img className={newCourses.mainHeader} src={image} />
      <div className={newCourses.content}>
        <h4>{title}</h4>
        <div className={newCourses.teacher}>
          <img src={user} />
          <p>
            مدرس:
            <span className={newCourses.teacherTheme}> {tName}</span>
          </p>
        </div>
        <div className={newCourses.date}>
          <img src={time} />
          <p>
            شروع دوره: <strong>۵ اسفند ۱۴۰۲</strong>
          </p>
        </div>
      </div>
      <hr />
      <div className={newCourses.price}>
        <span>{`${price} تومان`}</span>
        <img src={popularArrow} />
      </div>
    </div>
  );
}
