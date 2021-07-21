import React from 'react';

const TopNav = () => {
    return (
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

    );
}

export default TopNav;