import { Link,useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    const path = window.location.pathname
    return (
     <nav className="nav">
        <Link to="/" className="site-title"> 
        Pws Mees & Stijn
        </Link>
        <ul>
            <CustomLink to="/live_feed"> Live Feed</CustomLink>
            <CustomLink to="/add_faces"> Add Faces</CustomLink>
            <CustomLink to="/account"> Account</CustomLink>
        </ul>
    </nav>
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