import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { handleDeleteCourse } from "./../../../actions/courses";

const DeleteCourseDialog = ({ showDialog, closeDialog, course }) => {
    const dispatch = useDispatch();

    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}
            style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
        >
            <DialogContent
                style={{
                    border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                }}
            >
                <div className="card text-center">
                    <h3 style={{ fontSize: "2rem" }}>
                        پاک کردن دوره {course.title}
                    </h3>
                    <hr />
                    <p> مطمئن هستی می خوای دوره {course.title} رو پاک کنی؟</p>
                </div>
                <button
                    className="btn btn-danger "
                    style={{ margin: "1em" }}
                    onClick={() =>
                        dispatch(handleDeleteCourse(course._id)) &&
                        closeDialog()
                    }
                >
                    مطمئنم پاک کن
                </button>
                <button
                    className="btn btn-warning mr-5"
                    style={{ margin: "1em" }}
                    onClick={closeDialog}
                >
                    انصراف
                </button>
            </DialogContent>
        </DialogOverlay>
    );
};

export default DeleteCourseDialog;
