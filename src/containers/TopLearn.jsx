import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./../components/Layouts/MainLayout";
import Course from "./../components/Courses/Course";
import Login from "./../components/Login/Login";
import Register from "./../components/Register/Register";
import Archive from "./../components/Courses/Aechive";
import { useSelector } from "react-redux";
import { paginate } from "./../utils/paginate";
import SingleCourse from "./../components/Courses/SingleCourse";

const TopLearn = () => {
    const courses = useSelector((state) => state.courses);
    const indexCourses = paginate(courses, 1, 8);

    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/archive" component={Archive} />
                <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                />
                <Route path="/course/:id" component={SingleCourse} />
            </Switch>
        </MainLayout>
    );
};

export default TopLearn;
