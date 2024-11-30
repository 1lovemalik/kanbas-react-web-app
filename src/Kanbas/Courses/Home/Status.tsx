import { MdDoNotDisturbAlt } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "200px", fontSize: "0.875rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Course Status</h3>
            <div className="d-flex mb-2">
                <button className="btn btn-sm btn-secondary w-50 me-1 text-nowrap">
                    <MdDoNotDisturbAlt className="me-1" /> Unpublish
                </button>
                <button className="btn btn-sm btn-success w-50 text-nowrap">
                    <FaCheckCircle className="me-1" /> Publish
                </button>
            </div>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <BiImport className="me-1" /> Import Content
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <LiaFileImportSolid className="me-1" /> From Commons
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <BiHome className="me-1" /> Home Screen
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <MdOutlineContactPage className="me-1" /> Course Stream
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <BiMicrophone className="me-1" /> Announcements
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <TbDeviceAnalytics className="me-1" /> Analytics
            </button>
            <button className="btn btn-sm btn-secondary w-100 mb-1 text-start">
                <IoIosNotifications className="me-1" /> Notifications
            </button>
        </div>
    );
}
