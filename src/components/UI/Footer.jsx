import footer from "../../components/styles/footer.module.scss";
import logo from "../../assets/icons/Header/Logo.svg";
import facebook from "../../assets/icons/Header/facebook.svg";
import insta from "../../assets/icons/Header/insta.svg";
import linkedIn from "../../assets/icons/Header/linkedIn.svg";
import twitter from "../../assets/icons/Header/twitter.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={footer.container}>
          <div className={footer.column1}>
            <div className={footer.logo}>
              <span>LOGO</span>
              <img src={logo} alt="" />
            </div>
            <div className={footer.content}>
              <div>
                <h2>تماس با ما</h2>
              </div>
              <div className={footer.p}>
                <p>آموزش مجازی با کیفیت برای همه؛ بدون مرز، همیشه، همه‌جا</p>
                <p>شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</p>
                <p>Email: example@mail.com</p>
              </div>
            </div>
            <div className={footer.contactsContainer}>
              <div className={footer.contacts}>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={linkedIn} alt="" />
                </a>
                <a href="#">
                  <img src={insta} alt="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={footer.column2}>
            <div className={footer.rightColumn}>
              <h2>لینک‌ها</h2>
              <div className={footer.contacts}>
                <a href="#">خانه</a>
                <a href="#">دوره های آنلاین</a>
                <a href="#">آزمون های آنلاین</a>
                <a href="#">درباره ما</a>
                <a href="#">ارتباط با ما</a>
              </div>
            </div>
            <div className={footer.leftColumn}>
              <h2>دسته‌بندی</h2>
              <div className={footer.contacts}>
                <a href="#">برنامه نویسی</a>
                <a href="#">طراحی</a>
                <a href="#">بازاریابی</a>
                <a href="#">کسب و کار</a>
                <a href="#">سبک زندگی</a>
                <a href="#">عکاسی</a>
                <a href="#">موسیقی</a>
              </div>
            </div>
          </div>
          <div className={footer.column3}>
            <div className={footer.top}>
              <h2>مشترک شدن</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className={footer.bottom}>
              <input
                type="text"
                name=""
                id=""
                placeholder="ایمیل را وارد کنید"
              />
              <button>مشترک شدن</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
