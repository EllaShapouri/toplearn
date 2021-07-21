import React, { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <div className="landing-layer">
        <div className="container">
          <nav>
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <ul>
                  <li>
                    <a href=""> همکاری در فروش </a>
                    <a href=""> درباره ما </a>
                    <a href=""> تماس با ما </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="clientarea">
                  <div className="loggein ">
                    <i className="zmdi zmdi-account"></i>
                    <a href=""> ایمان مدائنی ، خوش آمدی </a>
                  </div>
                  <div className="signin hidden">
                    <i className="zmdi zmdi-account"></i>
                    <a href=""> ورود </a> /<a href=""> عضویت </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <header>
            <a href="" className="logo">
              <img src="images/logo.png" />
            </a>
            <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
            <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
            <h3> با کمترین هزینه خودت یاد بگیر </h3>
          </header>
          <div className="search-form">
            <form>
              <input
                type="text"
                name=""
                placeholder="چی دوست داری یاد بگیری ؟"
              />
              <button>
                <i className="zmdi zmdi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="container">
          <nav>
            <span className="responsive-sign">
              <i className="zmdi zmdi-menu"></i>
            </span>
            <ul>
              <li>
                <a href=""> برنامه نویسی موبایل </a>
                <ul>
                  <li>
                    <a href=""> زامارین Xamarin </a>
                  </li>
                  <li>
                    <a href=""> react Native </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href=""> برنامه نویسی وب </a>
                <ul>
                  <li>
                    <a href=""> Asp.net WebForms </a>
                  </li>
                  <li>
                    <a href=""> Asp.net MVC </a>
                  </li>
                  <li>
                    <a href=""> PHP MVC </a>
                  </li>
                  <li>
                    <a href=""> PHP FrameWorks </a>
                  </li>
                  <li>
                    <a href=""> Asp.net Core </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href=""> برنامه نویسی تحت ویندوز </a>
              </li>
              <li>
                <a href=""> طراحی سایت </a>
                <ul>
                  <li>
                    <a href=""> طراحی سایت </a>
                  </li>
                  <li>
                    <a href=""> Bootstrap </a>
                  </li>
                  <li>
                    <a href=""> Angular </a>
                  </li>
                  <li>
                    <a href=""> react </a>
                  </li>
                  <li>
                    <a href=""> Jquery </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href=""> بانک های اطلاعاتی </a>
              </li>
              <li>
                <a href=""> سئو </a>
              </li>
              <li>
                <a href=""> سیستم عامل </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main id="home-page">
        <div className="container">
          <section className="terms-items">
            <header>
              <h2> آخرین دوره های تاپ لرن </h2>
              <a href=""> مشاهده همه دوره ها </a>
            </header>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/1.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/2.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/3.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 150.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/4.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/5.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 15.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/6.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/7.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 20.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/8.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 75.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>
            </div>
          </section>

          <hr />

          <section className="terms-items">
            <header>
              <h2> دوره های محبوب تاپ لرن </h2>
              <a href=""> مشاهده همه دوره ها </a>
            </header>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/1.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/2.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/3.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 150.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/4.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/5.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 15.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/6.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> رایگان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/7.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 20.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                  <a href="" className="img-layer">
                    <img src="images/pic/8.jpg" />
                  </a>
                  <h2>
                    <a href=""> آموزش متریال دیاین در زامارین </a>
                  </h2>
                  <span> 75.000 تومان </span>
                  <i>1:52:32</i>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <section className="list">
                  <header>
                    <h4> دسترسی سریع</h4>
                  </header>
                  <ul>
                    <li>
                      <a href="">مشاهده تمامی دوره ها</a>
                    </li>
                    <li>
                      <a href="">قوانین خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">راهنمای خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">همکاری با تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">کسب درآمد از تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">ماهنامه طراحی وب</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <section className="list">
                  <header>
                    <h4> دسترسی سریع</h4>
                  </header>
                  <ul>
                    <li>
                      <a href="">مشاهده تمامی دوره ها</a>
                    </li>
                    <li>
                      <a href="">قوانین خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">راهنمای خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">همکاری با تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">کسب درآمد از تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">ماهنامه طراحی وب</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <section className="list">
                  <header>
                    <h4> دسترسی سریع</h4>
                  </header>
                  <ul>
                    <li>
                      <a href="">مشاهده تمامی دوره ها</a>
                    </li>
                    <li>
                      <a href="">قوانین خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">راهنمای خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">همکاری با تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">کسب درآمد از تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">ماهنامه طراحی وب</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <section className="list">
                  <header>
                    <h4> دسترسی سریع</h4>
                  </header>
                  <ul>
                    <li>
                      <a href="">مشاهده تمامی دوره ها</a>
                    </li>
                    <li>
                      <a href="">قوانین خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">راهنمای خرید از سایت </a>
                    </li>
                    <li>
                      <a href="">همکاری با تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">کسب درآمد از تاپ لرن </a>
                    </li>
                    <li>
                      <a href="">ماهنامه طراحی وب</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <p>
              تمامی حقوق مادی و معنوی این قالب متعلق به <a href=""> تاپ لرن </a>{" "}
              می باشد و هرگونه کپی برداری و انتشار غیر مجاز پیگرد قانونی دارد .
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default App;
