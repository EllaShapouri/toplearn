import React, { useState } from "react";
import { dashContext } from "./DashContext";
import { paginate } from "./../../utils/paginate";

const AdminContext = ({ courses, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setperPage] = useState(5);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const courseData = paginate(courses, currentPage, perPage);

    return (
        <dashContext.Provider
            value={{
                currentPage,
                perPage,
                handlePageChange,
                courseData,
            }}
        >
            {children}
        </dashContext.Provider>
    );
};

export default AdminContext;
