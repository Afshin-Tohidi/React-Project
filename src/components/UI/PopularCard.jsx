import popular from "../styles/popular.module.scss";
import rating from "../../assets/icons/Popular/rating.svg";
import popularArrow from "../../assets/icons/Popular/popular-arrow.svg";

export default function ({ title, image, price, vote }) {
  return (
    <div className={popular.cards}>
      <img src={image} />
      <div className={popular.content}>
        <span className={popular.title}>{title}</span>
        <div className={popular.rating}>
          <img src={rating} alt="" />
          <span className={popular.rate}>({vote})</span>
        </div>
      </div>
      <hr />
      <div className={popular.price}>
        <span> {`${price}تومان`}</span>
        <img src={popularArrow} alt="" />
      </div>
    </div>
  );
}
