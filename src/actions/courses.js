import { successMessage } from "../utils/toast";
import {
    getCourses,
    newCourse,
    updateCourse,
    deleteCourse,
} from "./../Services/coursesServices";

export const allCourses = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        try {
            const { data, status } = await newCourse(course);
            if (status === 201) successMessage("دوره با موفقیت ساخته شد");

            await dispatch({
                type: "ADD_COURSE",
                payload: [...courses, data.course],
            });
        } catch (error) {
            await dispatch({
                type: "ADD_COURSE",
                payload: [...courses],
            });
        }
    };
};

export const editCourse = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );
        try {
            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...filteredCourses, data.course],
            });
            if (status === 200) successMessage("دوره با موفقیت ویرایش شد .");
        } catch (error) {
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...courses],
            });
        }
    };
};

export const handleDeleteCourse = (courseId) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );
        try {
            const { status } = await deleteCourse(courseId);
            await dispatch({
                type: "DELETE_COURSE",
                payload: [...filteredCourses],
            });
            if (status === 200) successMessage("دوره پاک شد.");
        } catch (error) {
            await dispatch({
                type: "DELETE_COURSE",
                payload: [...courses],
            });
        }
    };
};
