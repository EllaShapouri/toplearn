import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <Link to="/"> صفحه اصلی </Link>
                            <a href=""> درباره ما </a>
                            <a href=""> تماس با ما </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="clientarea">
                        <div className="loggein hidden">
                            <i className="zmdi zmdi-account"></i>
                            <a href=""> ایمان مدائنی ، خوش آمدی </a>
                        </div>
                        <div className="signin">
                            <i className="zmdi zmdi-account"></i>
                            <Link to="/login"> ورود </Link> /<Link to="/register"> عضویت </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default TopNav;