import React, { useState } from "react";
import { dashContext } from "./DashContext";
import { paginate } from "./../../utils/paginate";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import EditCourseDialog from "./../admin/dialogs/EditCourseDialog";

const AdminContext = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCourse, setCurrentCourse] = useState({});
    const [perPage] = useState(5);
    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const openNewCourseDialog = () => setNewCourseDialog(true);
    const openEditCourseDialog = (course) => {
        setEditCourseDialog(true);
        setCurrentCourse(course);
    };

    const closeNewCourseDialog = () => setNewCourseDialog(false);
    const closeEditCourseDialog = () => setEditCourseDialog(false);

    const courseData = paginate(courses, currentPage, perPage);

    return (
        <dashContext.Provider
            value={{
                currentPage,
                perPage,
                handlePageChange,
                courseData,
                openNewCourseDialog,
                openEditCourseDialog,
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
            {children}
        </dashContext.Provider>
    );
};

export default AdminContext;
