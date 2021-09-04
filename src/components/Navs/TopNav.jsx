import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { NavLink } from "react-router-dom";

const TopNav = () => {
    const user = useSelector((state) => state.user);

    return (
        <nav>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <NavLink to="/"> صفحه اصلی </NavLink>
                            <a href=""> درباره ما </a>
                            <a href=""> تماس با ما </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="clientarea">
                        {!isEmpty(user) ? (
                            <div className="loggein">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink to="/profile">
                                    {" "}
                                    {user.fullname}{" "}
                                </NavLink>
                                /<NavLink to="/logout"> خروج از حساب </NavLink>
                            </div>
                        ) : (
                            <div className="signin">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink to="/login"> ورود </NavLink> /
                                <NavLink to="/register"> عضویت </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
