import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(logoutUser());
        history.push("/");
    }, []);
    return null;
};

export default withRouter(Logout);
