import {AiOutlineDashboard} from "react-icons/ai";
import {LiaBookSolid} from "react-icons/lia";
import {FaRegCircleUser} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {BiCalendarEvent} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import {BiBookmark} from "react-icons/bi";


export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{width: 100}}
                 className="list-group rounded-0  bottom-0 top-0 d-none d-md-block bg-black z-2">

        <a id="wd-neu-link" target="_blank"
           href="https://www.northeastern.edu/"
           className="list-group-item bg-black border-0 text-center">
            <img src="/images/NOMonogram.svg"
                 width="75px" alt={"Northeastern Logo"}/></a>
        <br/>

        <Link to="/Kanbas/Account" id="wd-account-link"
              className="list-group-item text-center border-0 bg-black text-white">
            <FaRegCircleUser className="fs-1 text text-white"/><br/>
            Account </Link><br/>

        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
              className="list-group-item text-center border-0
                   bg-white text-danger">
            <AiOutlineDashboard className="fs-1 text-danger"/><br/>
            Dashboard </Link><br/>

        <Link to="/Kanbas/Dashboard" id="wd-course-link"
              className="list-group-item text-white
                   bg-black text-center border-0">
            <LiaBookSolid className="fs-1 text-danger"/><br/>
            Courses </Link><br/>

        <Link to="/Kanbas/Calendar" id="wd-course-link"
              className="list-group-item text-white
                            bg-black text-center border-0">
            <BiCalendarEvent className="fs-1 text-danger"/>
            Calendar
        </Link> <br/>

        <Link to="/Kanbas/Inbox" id="wd-inbox-link"
              className="list-group-item text-white
              bg-black text-center border-0">

            <FiMail className="fs-1 text-danger"/><br/>
            Mail
        </Link> <br/>
        <Link to="/Labs" id="wd-labs-link"
              className="list-group-item text-white
              bg-black text-center border-0">
            <BiBookmark className="fs-1 text-danger"/> <br/>
            Labs
        </Link> <br/>
    </div>
    );
}