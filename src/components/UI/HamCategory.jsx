import { useContext } from "react";
import BurgerMenuContext from "../../store/BurgerMenuContextProvider";
import "../styles/hamCategory.scss";
import arrow from "../../assets/icons/hamCategory/arrow.svg";
import arrows from "../../assets/icons/hamCategory/arrows.svg";
import longArrow from "../../assets/icons/hamCategory/longArrow.svg";
import search from "../../assets/icons/hamCategory/search.svg";

export default function HamCategory() {
  const { onReturn } = useContext(BurgerMenuContext);
  return (
    <>
      <div>
        <div className="hamCategory h-full w-64 md:w-2/4  bg-white absolute z-50 left-0 opacity-100">
          <div
            onClick={onReturn}
            className="flex gap-10 items-center mt-10 mr-10 justify-center md:gap-20"
          >
            <span className="text-lg font-bold md:text-xl text-green-950">
              دسته بندی ها
            </span>
            <img className="w-5 h-5 md:w-6 md:h-4" src={arrow} alt="" />
          </div>
          <hr className="mt-2" />
          <div className="relative">
            <img
              className="w-5 h-5 absolute right-12 top-5 md:right-14 md:w-7 md:h-7 md:top-6"
              src={search}
              alt=""
            />
            <input
              className="w-44 h-8 rounded-xl bg-slate-100 mt-4 mr-10 pr-8 text-sm font-medium md:w-72 md:mr-12 md:h-12 md:pr-10"
              type="search"
              placeholder="جستجوی دسته بندی"
            />
            <div className="flex gap-4 mt-6 justify-center">
              <span className="text-gray-500">همه آموزش ها</span>
              <img src={longArrow} alt="" />
            </div>
            <div>
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">برنامه نویسی</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">طراحی</span>
                <img className="mr-7" src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">بازاریابی</span>
                <img className="mr-7" src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">کسب و کار</span>
                <img className="mr-5" src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">سبک زندگی</span>
                <img className="mr-5" src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">عکاسی</span>
                <img className="mr-8" src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">موسیقی</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">علم داده</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">توسعه شخصی</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">سلامت</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">سرمایه گذاری</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
              <div className="flex mt-5 mr-10 justify-between w-44 md:w-72">
                <span className="text-green-950">درس دادن</span>
                <img src={arrows} alt="" />
              </div>
              <hr className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
