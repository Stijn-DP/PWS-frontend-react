import { Link,useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    const path = window.location.pathname
    return (
    <div className="navbar">
        <nav className="nav">
            <Link to="/" className="site-title"> <img className="logo" src="logo.png" alt="camera"></img>
            Pws Mees & Stijn
            </Link>
            <div className="pagebtns">
                <ul>
                    <CustomLink to="/live_feed"> Live Feed</CustomLink>
                    <CustomLink to="/add_faces"> Add Faces</CustomLink>
                </ul>    
                <button class="btnlogin"><CustomLink to="./Login"> Log in</CustomLink></button>
            </div>
        </nav>
    </div>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}