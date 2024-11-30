import { FaPlus, FaSearch } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons.tsx";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import { BsGripVertical } from "react-icons/bs";
import { FaFileLines } from "react-icons/fa6";
import "../../styles.css";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="card-rounded-0 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group w-50">
                    <span className="input-group-text bg-white border-end-0">
                        <FaSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search for Assignments"
                    />
                </div>
                <div>
                    <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-outline-secondary">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            <div className="card rounded-0">
                <div className="card-header bg-secondary text-dark border-black fw-bold d-flex align-items-center">
                    <ModuleControlButtons />
                    <BsGripVertical className="me-2" />
                    ASSIGNMENTS
                    <div className="ms-auto d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-light me-2">
                            <FaPlus />
                        </button>
                        <button className="card rounded-2 bg-secondary text-dark border-gray">
                            40% of Total
                        </button>
                    </div>
                </div>

                <ul id="wd-assignment-list" className="list-group rounded-0">
                    <li className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical />
                                <FaFileLines />
                                <a
                                    className="wd-title text-decoration-none text-black fw-bold ms-2"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                >
                                    A1 - ENV + HTML
                                </a>
                                <div className="ms-4 text-secondary fs-6 fw-bold">
                                    Single Module | Not Available Until April 30, 12:00 AM
                                </div>
                                <div className="text-muted small ms-4">Due: May 1, 2024 | 100 Points</div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical />
                                <FaFileLines />
                                <a
                                    className="wd-title text-decoration-none text-black fw-bold ms-2"
                                    href="#/Kanbas/Courses/1234/Assignments/124"
                                >
                                    A2 - CSS Basics
                                </a>
                                <div className="ms-4 text-secondary fs-6 fw-bold">
                                    Multiple Modules | Not Available Until May 12, 12:00 AM
                                </div>
                                <div className="text-muted small ms-4">Due: May 15, 2024 | 80 Points</div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical />
                                <FaFileLines />
                                <a
                                    className="wd-title text-decoration-none text-black fw-bold ms-2"
                                    href="#/Kanbas/Courses/1234/Assignments/125"
                                >
                                    A3 - JavaScript Fundamentals
                                </a>
                                <div className="ms-4 text-secondary fs-6 fw-bold">
                                    Multiple Modules | Not Available Until May 20, 12:00 AM
                                </div>
                                <div className="text-muted small ms-4">Due: May 25, 2024 | 90 Points</div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical />
                                <FaFileLines />
                                <a
                                    className="wd-title text-decoration-none text-black fw-bold ms-2"
                                    href="#/Kanbas/Courses/1234/Assignments/126"
                                >
                                    A4 - DOM Manipulation
                                </a>
                                <div className="ms-4 text-secondary fs-6 fw-bold">
                                    Multiple Modules | Not Available Until June 1, 12:00 AM
                                </div>
                                <div className="text-muted small ms-4">Due: June 5, 2024 | 120 Points</div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <BsGripVertical />
                                <FaFileLines />
                                <a
                                    className="wd-title text-decoration-none text-black fw-bold ms-2"
                                    href="#/Kanbas/Courses/1234/Assignments/127"
                                >
                                    A5 - Responsive Design with Flexbox
                                </a>
                                <div className="ms-4 text-secondary fs-6 fw-bold">
                                    Single Module | Not Available Until June 10, 12:00 AM
                                </div>
                                <div className="text-muted small ms-4">Due: June 15, 2024 | 110 Points</div>
                            </div>
                            <LessonControlButtons />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
