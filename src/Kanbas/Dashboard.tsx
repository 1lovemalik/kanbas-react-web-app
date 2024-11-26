import {Link} from "react-router-dom";

export default function Dashboard() {
    return (<div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr/>
        <h2 id="wd-dashboard-published">Published Courses (7)</h2>
        <hr/>
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/1234/Home">
                            <img src="/images/FullStackIMG.png" width="300" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <button className="btn btn-primary"> Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-title text-decoration-none text-dark"
                              to="/Kanbas/Courses/2345/Home">
                            <img src="/images/Databases.png" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-tile card-title">CS2345 Databases</h5>
                                <p className="wd-dashboard-course-title card-text">Database Design Using SQL</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                        <br/>
                    </div>

                </div>
                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/3456/Home">
                            <img src="/images/MachineLearning.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS3456 Machine Learning</h5>
                                <p className="wd-dashboard-course-title card-text">Intro to Machine
                                    Learning</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/4567/Home">
                            <img src="/images/Compiler%20Design.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS4567 Compilers</h5>
                                <p className="wd-dashboard-course-title card-text">Compiler Design</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/5678/Home">
                            <img src="/images/SwiftDev.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-text">CS5678 Mobile App Dev</h5>
                                <p className="wd-dashboard-course-title">IOS Mobile App Development</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col"  style={{width:"300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/6789/Home">
                            <img src="/images/GameEng.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5>CS6789 Game Engines</h5>
                                <p className="wd-dashboard-course-title">Building Game Engines </p>
                                <button className="btn btn-primary">Go</button>
                                <br/>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                              to="/Kanbas/Courses/7890/Home">
                            <img src="/images/SoftwareDev.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS7890 Software Dev</h5>
                                <p className="wd-dashboard-course-title">Building Scalable Programs</p>
                                <button className="btn btn-primary">Go</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
