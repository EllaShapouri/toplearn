import React, { useState } from "react";
import { dashContext } from "./DashContext";
import { paginate } from "./../../utils/paginate";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import EditCourseDialog from "./../admin/dialogs/EditCourseDialog";
import DeleteCourseDialog from "../admin/dialogs/DeleteCourseDialog";

const AdminContext = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const courseData = paginate(courses, currentPage, perPage);

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
