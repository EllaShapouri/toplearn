import React, { useRef, useState } from "react";
import { context } from "./Context";
import { useDispatch } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { loginUser, registerUser } from "./../../Services/userServices";
import { addUser } from "./../../actions/user";
import { decodeToken } from "./../../utils/decodeToken";
import { errorMessage, successMessage } from "./../../utils/toast";
import { withRouter } from "react-router-dom";

const UserContext = ({ history, children }) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
    const [, forceUpdate] = useState("");

    const dispatch = useDispatch();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی است.",
                min: "نباید کمتر از 5 کاراکتر باشد.",
                email: "ایمیل نوشته شده صحیح نمی باشد.",
            },
            element: (message) => <div style={{ color: "red" }}>{message}</div>,
        })
    );

    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password,
        };

        try {
            if (validator.current.allValid()) {
                const { status } = await registerUser(user);
                if (status === 201) {
                    successMessage("کاربر با موفقیت ساخته شد.");
                    history.push("/login");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            errorMessage("مشکلی پیش آمده است.");
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
                    successMessage("شما با موفقیت وارد شدید.");
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
            errorMessage("مشکلی پیش آمده.");
            console.log(ex);
        }
    };

    return (
        <context.Provider
            value={{
                fullname,
                setFullname,
                email,
                setEmail,
                password,
                setPassword,
                policy,
                setPolicy,
                validator,
                handleLogin,
                handleRegister,
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(UserContext);
