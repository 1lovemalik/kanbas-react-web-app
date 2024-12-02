import {Link, useParams} from "react-router-dom";
import * as db from "../../Database";

export default function EditAssignment() {
    const {cid, aid} = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);

    if (!assignment) {
        return <div className="container mt-4">Assignment not found.</div>;
    }

    return (<div className="container mt-4">
            <h3 className="mb-4">Edit Assignment</h3>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="assignmentName" className="col-sm-2 col-form-label fw-bold">
                        Assignment Name:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="assignmentName"
                            defaultValue={assignment.title}
                            placeholder="Enter assignment name"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="assignmentDescription" className="col-sm-2 col-form-label fw-bold">
                        Description:
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="assignmentDescription"
                            placeholder="Enter assignment description"
                        ></textarea>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="assignmentPoints" className="col-sm-2 col-form-label fw-bold">
                        Points:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="assignmentPoints"
                            placeholder="Enter points"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="assignmentDueDate" className="col-sm-2 col-form-label fw-bold">
                        Due Date:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="assignmentDueDate"
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label fw-bold">
                        Assignment Group:
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="assignmentGroup">
                            <option>Group 1</option>
                            <option>Group 2</option>
                            <option>Group 3</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="displayGrade" className="col-sm-2 col-form-label fw-bold">
                        Display Grade As:
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="displayGrade">
                            <option>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="submissionType" className="col-sm-2 col-form-label fw-bold">
                        Submission Type:
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="submissionType">
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4 text-end">
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments`}
                        className="btn btn-secondary me-2"
                    >
                        Cancel
                    </Link>
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments`}
                        className="btn btn-danger"
                    >
                        Save Assignment
                    </Link>
                </div>
            </form>
        </div>);
}
