import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './../components/Layouts/MainLayout'
import Course from './../components/Courses/Course';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';
import Archive from './../components/Courses/Aechive';

const TopLearn = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/archive" component={Archive} />
                <Route path="/" exact component={Course} />
                {/* <Course /> */}
            </Switch>
        </MainLayout>
    );
}

export default TopLearn;