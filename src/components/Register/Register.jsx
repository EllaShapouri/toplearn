import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import SimpleReactValidator from 'simple-react-validator';

import { registerUser } from './../../Services/userServices';

const Register = ({ history }) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
    const [, forceUpdate] = useState("");

    useEffect(() => {
        document.title = "تاپلرن | عضویت در سایت"
    }, []);

    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی است.",
            min: "نباید کمتر از 5 کاراکتر باشد.",
            email: "ایمیل نوشته شده صحیح نمی باشد."
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }));

    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async event => {

        event.preventDefault();

        const user = {
            fullname,
            email,
            password
        };

        try {
            if (validator.current.allValid()) {
                const { status } = await registerUser(user);
                if (status === 201) {
                    toast.success("کاربر با موفقیت ساخته شد.", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    history.push("/login");
                    reset();
                }
            }
            else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
            console.log(ex);
        }

        // registerUser(user)
        //     .then(({ data, status }) => {
        //         if (status === 201) {
        //             toast.success("کاربر با موفقیت ساخته شد.", {
        //                 position: "top-right",
        //                 closeOnClick: true
        //             });
        //             console.log(data);
        //             reset();
        //         }
        //     })
        //     .catch(ex => {
        //         toast.error("مشکلی پیش آمده.", {
        //             position: "top-right",
        //             closeOnClick: true
        //         });
        //         console.log(ex);
        //     });
    }

    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor("fullname");
                                }}
                            />
                        </div>
                        {validator.current.message("fullname", fullname, "required|min:5")}

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}
                            />
                        </div>
                        {validator.current.message("email", email, "required|email")}

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor("password");
                                }}
                            />
                        </div>
                        {validator.current.message("password", password, "required|min:5")}

                        <div className="accept-rules">
                            <label>
                                <input
                                    type="checkbox"
                                    name="policy"
                                    value={policy}
                                    onChange={e => {
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
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <Link to="/login"> <i className="zmdi zmdi-account"></i> ورود به سایت </Link>
                        </div>

                        <button className="btn btn-success"> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Register;
