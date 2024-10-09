import category from "../styles/category.module.scss";
import Arrow from "../../assets/icons/category/arrow.svg";

export default function CategoriesCard({ title, icon }) {
  return (
    <div className={category.categoryItems}>
      <div className={category.item}>
        <div>
          <img src={icon} />
        </div>
        <span>{title}</span>
      </div>
      <div className={category.arrow}>
        <img src={Arrow} />
      </div>
    </div>
  );
}
