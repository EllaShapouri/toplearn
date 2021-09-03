import http from "./Httpservices";
import config from "./applicationAPI.json";

export const getCourses = () => {
    return http.get(`${config.toplearnapi}/api/courses`);
};

export const getCourse = (courseId) => {
    return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};
