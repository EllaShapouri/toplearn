import React, { useEffect, useState } from "react";
import { dashContext } from "./DashContext";
import { paginate } from "./../../utils/paginate";
import { orderBy } from "lodash";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import EditCourseDialog from "./../admin/dialogs/EditCourseDialog";
import DeleteCourseDialog from "../admin/dialogs/DeleteCourseDialog";

const AdminContext = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const openNewCourseDialog = () => setNewCourseDialog(true);
    const closeNewCourseDialog = () => setNewCourseDialog(false);

    const [currentCourse, setCurrentCourse] = useState({});
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const openEditCourseDialog = (course) => {
        setEditCourseDialog(true);
        setCurrentCourse(course);
    };
    const closeEditCourseDialog = () => setEditCourseDialog(false);

    const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
    const openDeleteCourseDialog = (course) => {
        setDeleteCourseDialog(true);
        setCurrentCourse(course);
    };
    const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);

    const [search, setSearch] = useState("");
    const [courseList, setCourseList] = useState([]);

    useEffect(() => setCourseList(courses), [courses]);

    // for return searched courses
    const filteredCourses = courseList.filter((course) =>
        course.title.includes(search)
    );

    const sortCoursesDes = () => {
        setCourseList(orderBy(courseList, "price", "desc"));
    };

    const sortCoursesAsc = () => {
        setCourseList(orderBy(courseList, "price", "asc"));
    };

    const courseData = paginate(filteredCourses, currentPage, perPage);

    return (
        <dashContext.Provider
            value={{
                currentPage,
                perPage,
                handlePageChange,
                courseData,
                openNewCourseDialog,
                openEditCourseDialog,
                openDeleteCourseDialog,
                setSearch,
                filteredCourses,
                sortCoursesDes,
                sortCoursesAsc,
            }}
        >
            <NewCourseDialog
                showDialog={newCourseDialog}
                closeDialog={closeNewCourseDialog}
            />
            <EditCourseDialog
                showDialog={editCourseDialog}
                closeDialog={closeEditCourseDialog}
                course={currentCourse}
            />
            <DeleteCourseDialog
                showDialog={deleteCourseDialog}
                closeDialog={closeDeleteCourseDialog}
                course={currentCourse}
            />
            {children}
        </dashContext.Provider>
    );
};

export default AdminContext;
