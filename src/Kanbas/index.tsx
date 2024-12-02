import {Navigate, Route, Routes} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
    return (<div id="wd-kanbas" className="d-flex">
            <KanbasNavigation/>
            <div id="wd-main-content-offset"
                 className="flex-grow-1 p-3"
                 style={{marginLeft: "100px"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Account"/>}/>
                    <Route path="/Account/*" element={<Account/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/Courses/:cid/*" element={<Courses/>}/>
                    <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                    <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                </Routes>
            </div>
        </div>);
}
