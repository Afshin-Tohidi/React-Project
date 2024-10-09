import { useEffect, useState } from "react";
import category from "../../components/styles/category.module.scss";
import CategoriesCard from "./CategoriesCard";

export default function Category() {
  const [categories, setCategories] = useState([]);
  async function fetchCategories() {
    const response = await fetch("http://localhost:3030/categories");
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className={category.category}>
        <h2>دسته بندی ها</h2>
        <div className={category.categoryContainer}>
          {categories.map((category) => (
            <CategoriesCard
              key={category.id}
              title={category.title}
              icon={`http://localhost:3030/images/${category.icon}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
