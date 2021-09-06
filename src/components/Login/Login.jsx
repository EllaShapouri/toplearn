import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { context } from "../context/Context";

const Login = () => {
    const { email, setEmail, password, setPassword, validator, handleLogin } =
        useContext(context);

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> ورود به سایت </h2>
                </header>

                <Helmet>
                    <title>تاپلرن | ورود به سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form action="" method="" onSubmit={(e) => handleLogin(e)}>
                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}
                            />
                        </div>
                        {validator.current.message(
                            "email",
                            email,
                            "required|email"
                        )}

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}
                            />
                        </div>
                        {validator.current.message(
                            "password",
                            password,
                            "required|min:5"
                        )}

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> مرا بخاطر
                                بسپار{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                را فراموش کرده ام !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> عضویت در
                                سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            ورود به سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default withRouter(Login);
