import burgerMenu from "../../assets/icons/Header/burgerMenu.svg";
import logo from "../../assets/icons/Header/Logo.svg";
import vector from "../../assets/icons/Header/vector.png";
import boy from "../../assets/icons/Header/boy.png";
import header from "../../components/styles/header.module.scss";
import searchIcon from "../../assets/icons/Header/search.svg";
import facebook from "../../assets/icons/Header/facebook.svg";
import insta from "../../assets/icons/Header/insta.svg";
import linkedIn from "../../assets/icons/Header/linkedIn.svg";
import twitter from "../../assets/icons/Header/twitter.svg";
import { useContext, useState } from "react";
import BurgerMenuContext from "../../store/BurgerMenuContextProvider";

export default function Header() {
  const { onOpen } = useContext(BurgerMenuContext);

  return (
    <>
      <header>
        <div className={header.container}>
          <div className={header.logo}>
            <span>LOGO</span>
            <img src={logo} />
          </div>
          <div className="w-1/2 hidden ml-20 lg:block">
            <ul className="flex gap-12 mx-auto">
              <li>
                <a
                  href="#"
                  className="text-xl font-medium leading-6 text-green-950"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-medium leading-6 text-green-950"
                >
                  دوره های آنلاین
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-medium leading-6 text-green-950"
                >
                  آزمون های آنلاین
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-medium leading-6 text-green-950"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-medium leading-6 text-green-950"
                >
                  ارتباط با ما
                </a>
              </li>
            </ul>
          </div>
          <div className={header.burgerMenu}>
            <div>
              <img
                onClick={onOpen}
                className={header.img}
                src={burgerMenu}
                alt="burger-menu"
              />
            </div>
            <div className={header.register}>
              <span>ورود</span>
              <button>ثبت نام</button>
            </div>
          </div>
        </div>
        <div className={header.vector}>
          <img src={vector} />
        </div>
      </header>
      <main>
        <div className={header.headerContent}>
          <div className={header.title}>
            <h2>یادگیری آنلاین</h2>
            <p>دسترسی به بیش از 5000 دوره آموزشی از 300 مدرس و موسسه</p>
          </div>
          <div className={header.search}>
            <input type="text" placeholder="جستجو آموزش ..." />
            <img src={searchIcon} />
          </div>
          <div className={header.contacts}>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className={header.boy}>
          <img src={boy} alt="" />
        </div>
      </main>
    </>
  );
}
