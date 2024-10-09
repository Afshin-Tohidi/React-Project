import ourTeachers from "../styles/ourTeachers.module.scss";

export default function TeacherCard({ title, img, name, description }) {
  return (
    <div className={ourTeachers.cards}>
      <img src={img} />
      <div className={ourTeachers.content}>
        <h3>{name}</h3>
        <h6>{title}</h6>
        <p>{description}</p>
        <span>Professor@Tracy D. Wright</span>
      </div>
    </div>
  );
}
