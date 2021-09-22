import React from "react";
import { Link } from "react-router-dom";

const AdminTopNav = ({ user }) => {
    return (
        <ul className="nav navbar-left top-nav">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-user"> </i> {user.fullname}
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/profile">
                            <i className="fa fa-fw fa-user"></i> پروفایل
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-fw fa-eye"></i>مشاهده سایت
                        </Link>
                    </li>

                    <li className="divider"></li>
                    <li>
                        <Link to="/logout">
                            <i className="fa fa-fw fa-power-off"></i> خروج
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default AdminTopNav;
