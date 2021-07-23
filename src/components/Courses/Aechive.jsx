import React from 'react';

const Archive = () => {
    return (
        <div className="container">
            <section className="term-categories">

                <div className="top-bar">

                    <header><h1> دوره های <span> برنامه نویسی وب </span> </h1> <span> 123 دوره </span></header>

                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
                            <form action="" method="">
                                <div className="input">
                                    <input type="text" name="" placeholder="موضوع مورد نظر ..." />
                                    <button><i className="zmdi zmdi-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 pull-right">
                            <div className="switch-field available">
                                <input id="available-filter-1" name="available" value="all" checked="" type="radio" />
                                <label for="available-filter-1"> همه </label>
                                <input id="available-filter-2" name="available" value="off" type="radio" />
                                <label for="available-filter-2"> خریدنی </label>
                                <input id="available-filter-3" name="available" value="normal" type="radio" />
                                <label for="available-filter-3"> رایگان </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
                            <div className="select-ddl">
                                <select>
                                    <option> مرتب سازی </option>
                                    <option> قیمت </option>
                                    <option> مدرت زمان دوره </option>
                                    <option> تاریخ انتشار </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">

                        {/* <section className="aside-section filter-by-price">
                            <header><h3> فیلتر بر اساس قیمت </h3></header>
                            <div className="price-range">
                                <input type="hidden" value="" id="min-value" name="min_price">
                                    <input type="hidden" value="" id="max-value" name="max_price" />
                                    <div className="price-bar"><div id="priceFilter"></div></div>
                                    <div className="max-price">تا <span id="max-text">500000</span> تومان</div>
                                    <div className="min-price">از <span id="min-text">20000</span> تومان</div>
                                    <div className="clearfix"></div>
                            </div>
                        </section> */}

                        <section className="aside-section filter-by-category">
                            <header><h3> دسته بندی موضوعات </h3></header>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <input type="checkbox" name="" id="cat-1" />
                                        <label for="cat-1"> برنامه نویسی وب </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-2" />
                                        <label for="cat-2"> برنامه نویسی موبایل </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-3" />
                                        <label for="cat-3"> برنامه نویسی وب </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-4" />
                                        <label for="cat-4"> برنامه نویسی موبایل </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-5" />
                                        <label for="cat-5"> برنامه نویسی وب </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-6" />
                                        <label for="cat-6"> برنامه نویسی موبایل </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-7" />
                                        <label for="cat-7"> برنامه نویسی وب </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-8" />
                                        <label for="cat-8"> برنامه نویسی موبایل </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-9" />
                                        <label for="cat-9"> برنامه نویسی وب </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="cat-10" />
                                        <label for="cat-10"> برنامه نویسی موبایل </label>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </aside>

                    <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">

                        <section className="terms-items">
                            <div className="row">

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/1.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> رایگان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/2.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> رایگان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/3.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> 150.000 تومان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/4.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> رایگان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/5.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> 15.000 تومان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/6.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> رایگان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/7.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> 20.000 تومان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/8.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> 75.000 تومان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                                    <article>
                                        <a href="" className="img-layer"><img src="images/pic/4.jpg" /></a>
                                        <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                                        <span> 75.000 تومان </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>

                            </div>


                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </section>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Archive;