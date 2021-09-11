import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./../components/Layouts/MainLayout";
import Course from "./../components/Courses/Course";
import Login from "./../components/Login/Login";
import Logout from "./../components/Login/Logout";
import Register from "./../components/Register/Register";
import Archive from "./../components/Courses/Aechive";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "./../utils/paginate";
import SingleCourse from "./../components/Courses/SingleCourse";
import { decodeToken } from "./../utils/decodeToken";
import { addUser } from "./../actions/user";
import Profile from "./../components/UserProfile/Profile";
import UserContext from "./../components/context/UserContext";
import { isEmpty } from "lodash";
import NotFound from "./../components/common/NotFound";

const TopLearn = () => {
    const courses = useSelector((state) => state.courses);
    const user = useSelector((state) => state.user);
    const indexCourses = paginate(courses, 1, 8);

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const currentDate = Date.now() / 1000;
            const expireDate = decodedToken.payload.exp;

            if (expireDate < currentDate) {
                localStorage.removeItem("token");
            } else {
                dispatch(addUser(decodedToken.payload.user));
            }
        }
    }, []);

    return (
        <MainLayout>
            <Switch>
                <Route
                    path="/login"
                    render={() =>
                        isEmpty(user) ? (
                            <UserContext>
                                <Login />
                            </UserContext>
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                <Route
                    path="/logout"
                    render={() =>
                        !isEmpty(user) ? (
                            <UserContext>
                                <Logout />
                            </UserContext>
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                <Route
                    path="/register"
                    render={() =>
                        isEmpty(user) ? (
                            <UserContext>
                                <Register />
                            </UserContext>
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                <Route path="/archive" component={Archive} />
                <Route path="/profile" component={Profile} />
                <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                />
                <Route path="/course/:id" component={SingleCourse} />
                <Route path="*" component={NotFound} />
            </Switch>
        </MainLayout>
    );
};

export default TopLearn;
