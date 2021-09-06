import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { context } from "../context/Context";

const Register = () => {
    const {
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        policy,
        setPolicy,
        validator,
        handleRegister,
    } = useContext(context);

    // useEffect(() => {
    //     document.title = "تاپلرن | عضویت در سایت"
    // }, []);

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>

                <Helmet>
                    <title>تاپلرن | عضویت در سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={(e) => handleRegister(e)}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor(
                                        "fullname"
                                    );
                                }}
                            />
                        </div>
                        {validator.current.message(
                            "fullname",
                            fullname,
                            "required|min:5"
                        )}

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="email"
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

                        <div className="accept-rules">
                            <label>
                                <input
                                    type="checkbox"
                                    name="policy"
                                    value={policy}
                                    onChange={(e) => {
                                        setPolicy(e.currentTarget.checked);
                                        validator.current.showMessageFor(
                                            "policy"
                                        );
                                    }}
                                />
                                قوانین و مقررات سایت را میپذیرم
                            </label>
                            {validator.current.message(
                                "policy",
                                policy,
                                "required"
                            )}
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                            <Link to="/login">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </Link>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            عضویت در سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
