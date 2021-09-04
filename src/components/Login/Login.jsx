import React, { useState, useRef } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { loginUser } from "./../../Services/userServices";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./../../actions/user";
import { decodeToken } from "./../../utils/decodeToken";
import { isEmpty } from "lodash";

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState("");

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فید الزامی است.",
                min: "نباید کمتر از 5 کاراکتر باشد.",
                email: "ایمیل نوشته شده صحیح نمی باشد.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const reset = () => {
        setEmail("");
        setPassword("");
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const user = {
            email,
            password,
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success("شما با موفقیت وارد شدید.", {
                        position: "top-right",
                        closeOnClick: true,
                    });
                    reset();
                    console.log(data);
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(decodeToken(data.token).payload.user));
                    history.replace("/");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true,
            });
            console.log(ex);
        }
    };

    if (!isEmpty(user)) return <Redirect to="/" />;

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
                    <form action="" method="" onSubmit={handleLogin}>
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
