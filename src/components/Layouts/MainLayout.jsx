import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './../common/Footer';
import Header from './../common/Header';
import TopNav from './../Navs/TopNav';
import MainNav from './../Navs/MainNav';

const MainLayout = props => {
    return (
        <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    {props.location.pathname === '/' ? <Header /> : null}
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>

            <Footer />
        </Fragment>
    );
}

export default withRouter(MainLayout);