import fonts from "../src/components/styles/_fonts.module.scss";

import logo from "../src/assets/icons/Header/Logo.svg";
import facebook from "../src/assets/icons/Header/facebook.svg";
import insta from "../src/assets/icons/Header/insta.svg";
import linkedIn from "../src/assets/icons/Header/linkedIn.svg";
import twitter from "../src/assets/icons/Header/twitter.svg";
import popularArrow from "../src/assets/icons/Popular/popular-arrow.svg";

import Header from "./components/UI/Header";
import Category from "./components/UI/Category";
import PopularCourse from "./components/UI/PopularCourse";
import NewCourses from "./components/UI/NewCourses";
import OurTeachers from "./components/UI/OurTeachers";
import Information from "./components/UI/Information";
import Feedback from "./components/UI/Feedback";
import Footer from "./components/UI/Footer";
import HamMenu from "./components/UI/HamMenu";
import { useContext } from "react";
import menuContext from "./store/BurgerMenuContextProvider";
import HamCategory from "./components/UI/HamCategory";

function App() {
  const { menuState } = useContext(menuContext);
  const { categoryState } = useContext(menuContext);
  console.log(menuState);
  return (
    <>
      {menuState && <HamMenu />}
      {categoryState && <HamCategory />}

      <Header />
      <Category />
      <PopularCourse />
      <NewCourses />
      <OurTeachers />
      <Information />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
