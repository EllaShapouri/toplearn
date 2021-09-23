import React, { useContext } from "react";
import Pagination from "./../common/Pagination";
import { dashContext } from "./../context/DashContext";

const CourseTable = () => {
    const context = useContext(dashContext);
    const {
        currentPage,
        perPage,
        handlePageChange,
        courseData,
        openNewCourseDialog,
        openEditCourseDialog,
    } = context;
    return (
        <section style={{ marginTop: "5em", marginRight: "2em" }}>
            <div>
                <div>
                    <h3 className="alert alert-info text-center">
                        لیست دوره ها
                    </h3>
                    <div className="row inline-block">
                        <button
                            className="btn btn-primary"
                            onClick={openNewCourseDialog}
                        >
                            <span
                                className="fa fa-plus"
                                style={{
                                    verticalAlign: "middle",
                                    marginLeft: "1em",
                                }}
                            ></span>
                            اضافه کردن دوره جدید
                        </button>
                        <input
                            type="text"
                            placeholder="جستجوی دوره"
                            className="form-control"
                            style={{
                                width: "50%",
                                float: "left",
                                marginLeft: "2em",
                            }}
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">عنوان دوره</th>
                                <th scope="col">تصویر دوره</th>
                                <th scope="col">قیمت دوره (تومان)</th>
                                <th scope="col">ویرایش</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course) => (
                                <tr key={course._id}>
                                    <td>{course.title}</td>
                                    <td>
                                        <a
                                            href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                                            target="_blank"
                                            className="btn btn-info btn-sm"
                                        >
                                            نمایش تصویر
                                        </a>
                                    </td>
                                    <td>
                                        {course.price === 0
                                            ? "رایگان"
                                            : `${course.price}`}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                openEditCourseDialog(course)
                                            }
                                        >
                                            ویرایش
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="navbar-fixed-bottom text-center footer">
                    <Pagination
                        totalCourses={courseData.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        handleChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default CourseTable;
