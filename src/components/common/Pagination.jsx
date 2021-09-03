import { range } from 'lodash';
import React from 'react';

const Pagination = ({ totalCourses, currentPage, perPage, handleChange }) => {

    const pageCount = Math.ceil(totalCourses / perPage); // 1.8 -> 2
    if (pageCount === 1) return null;
    const pages = range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {/* <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                    </a>
                </li> */}
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a style={{ cursor: "pointer" }} className="page-link" onClick={() => handleChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}

                {/* <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                    </a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Pagination;