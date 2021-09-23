import { successMessage } from "../utils/toast";
import {
    getCourses,
    newCourse,
    updateCourse,
} from "./../Services/coursesServices";

export const allCourses = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) successMessage("دوره با موفقیت ساخته شد");
        await dispatch({
            type: "ADD_COURSE",
            payload: [...getState().courses, data.course],
        });
    };
};

export const editCourse = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const prevCourses = [...courses];
        const courseIndex = courses.findIndex(
            (course) => courseId === course._id
        );

        let thisCourse = courses[courseIndex];
        thisCourse = { ...Object.fromEntries(updatedCourse) };
        courses[courseIndex] = thisCourse;
        try {
            await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            if (status === 200) successMessage("دوره با موفقیت ویرایش شد .");
            console.log(data);
        } catch (error) {
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...prevCourses],
            });
        }
    };
};
