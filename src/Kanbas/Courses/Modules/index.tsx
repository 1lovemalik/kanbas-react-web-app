import ModulesControls from "./ModulesControls.tsx";

import '../../styles.css';
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import LessonControlButtons from "./LessonControlButtons.tsx";

export default function Modules() {
    return (<div>
            <ModulesControls/> <br/> <br/> <br/> <br/>

            <div className="card rounded-0">
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-3 fs-6 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1
                        <ModuleControlButtons />
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <span className="wd-title">LEARNING OBJECTIVES</span>
                                <LessonControlButtons />
                                <ul className="wd-content">
                                    <li className="wd-content-item">Introduction to the course</li>
                                    <li className="wd-content-item">Learn what is Web Development</li>
                                    <LessonControlButtons />
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="card rounded-0 overflow-hidden">
                <li className="wd-module list-group-item p-0 mb-3 fs-6 border-gray">
                    <ModuleControlButtons />
                    <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
                    <ul className="wd-lessons list-group-item ">
                        <li className="wd-lesson">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </div>

            <div className="container-collapse-view">
                <button className="wd-collapse-all btn rounded-2 border-gray p-2"> Collapse All</button>
               <button className="wd-view-progress btn rounded-2 border-gray p-2"> View Progress </button>
            </div>
        </div>


    );
}
