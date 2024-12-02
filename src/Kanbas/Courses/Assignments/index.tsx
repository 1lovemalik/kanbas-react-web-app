import {FaPlus, FaSearch} from "react-icons/fa";
import {BsGripVertical} from "react-icons/bs";
import {FaFileLines} from "react-icons/fa6";
import {useParams} from "react-router";
import * as db from "../../Database";
import "../../styles.css";
import {Link} from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);

    return (<div id="wd-assignments" className="card-rounded-0 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group w-50">
                    <span className="input-group-text bg-white border-end-0">
                        <FaSearch/>
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
                        <FaPlus className="me-1"/> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-outline-secondary">
                        <FaPlus className="me-1"/> Assignment
                    </button>
                </div>
            </div>

            <div className="card rounded-0">
                <div className="card-header bg-secondary text-dark border-black fw-bold d-flex align-items-center">
                    <BsGripVertical className="me-2"/>
                    ASSIGNMENTS
                </div>

                <ul id="wd-assignment-list" className="list-group rounded-0">
                    {assignments.length > 0 ? (assignments.map((assignment) => (<li
                                key={assignment._id}
                                className="wd-assignment-list-item list-group-item p-3 fs-6 border-gray"
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <BsGripVertical/>
                                        <FaFileLines/>
                                        <Link
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="wd-title text-decoration-none text-black fw-bold ms-2"
                                        >
                                            {assignment.title}
                                        </Link>
                                    </div>
                                </div>
                            </li>))) : (
                        <li className="list-group-item p-3 text-muted">No assignments found for this course.</li>)}
                </ul>
            </div>
        </div>);
}
