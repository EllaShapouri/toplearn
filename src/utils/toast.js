import { toast } from "react-toastify";

export const successMessage = (message) => {
    return toast.success(message, {
        position: "top-right",
        closeOnClick: true,
    });
};
export const errorMessage = (message) => {
    return toast.error(message, {
        position: "top-right",
        closeOnClick: true,
    });
};
