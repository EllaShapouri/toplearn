import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminSidebar = ({ location }) => {
    return (
        <div>
            <ul className="nav navbar-nav side-nav" style={{ height: "100vh" }}>
                <li
                    className={
                        location.pathname === "/dashboard" ? "active" : ""
                    }
                >
                    <Link to="/dashboard">
                        <i className="fa fa-fw fa-dashboard"></i> داشبورد
                    </Link>
                </li>

                <li
                    className={
                        location.pathname === "/dashboard/courses"
                            ? "active"
                            : ""
                    }
                >
                    <Link to="/dashboard/courses">
                        <i className="fa fa-fw fa-graduation-cap"></i> دوره ها
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(AdminSidebar);
