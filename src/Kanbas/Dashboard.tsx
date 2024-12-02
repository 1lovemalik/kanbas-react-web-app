import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
    const courses = db.courses;

    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title" className="mb-3">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published" className="mb-4">
                Published Courses ({courses.length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course) => (
                    <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link
                                to={`/Kanbas/Courses/${course._id}/Home`}
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                            >
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    width="100%"
                                    height={160}
                                />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {course.name}
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text overflow-hidden">
                                        {course.description}
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
