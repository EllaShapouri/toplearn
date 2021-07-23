import React from 'react';

const Login = () => {
    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form action="" method="">

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" placeholder="رمز عبور " aria-describedby="password" />
                        </div>

                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                        </div>

                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Login;