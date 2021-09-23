import { createContext } from "react";

export const dashContext = createContext({
    currentPage: 1,
    setCurrentPage: () => {},
    perPage: 5,
    setperPage: () => {},
    handlePageChange: () => {},
    courseData: [],
});
