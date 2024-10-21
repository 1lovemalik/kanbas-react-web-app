import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack software developer</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
                        <img src="/images/nodejs.jpg" width={200} />
                        <div>
                            <h5>CS2345 Node.js</h5>
                            <p className="wd-dashboard-course-title">Backend development with Node.js</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
                        <img src="/images/python.jpg" width={200} />
                        <div>
                            <h5>CS3456 Python</h5>
                            <p className="wd-dashboard-course-title">Data Science and Machine Learning</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
                        <img src="/images/css.jpg" width={200} />
                        <div>
                            <h5>CS4567 CSS3</h5>
                            <p className="wd-dashboard-course-title">Advanced CSS Techniques</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
                        <img src="/images/django.jpg" width={200} />
                        <div>
                            <h5>CS5678 Django</h5>
                            <p className="wd-dashboard-course-title">Web Development with Django</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
                        <img src="/images/database.jpg" width={200} />
                        <div>
                            <h5>CS6789 Database Systems</h5>
                            <p className="wd-dashboard-course-title">Introduction to Databases</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
                        <img src="/images/javascript.jpg" width={200} />
                        <div>
                            <h5>CS7890 JavaScript</h5>
                            <p className="wd-dashboard-course-title">Modern JavaScript ES6+</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
