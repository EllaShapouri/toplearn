import { getCourse } from "../Services/coursesServices";

export const getSingleCourse = (courseId) => {
    return async (dispatch) => {
        const { data } = await getCourse(courseId);
        await dispatch({ type: "GET_COURSE", payload: data.course });
    };
};
