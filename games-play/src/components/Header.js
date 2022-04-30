import { Link, NavLink } from "react-router-dom";

const Header = ({
    navigationChangeHandler,

}) => {
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <header >
            <h1><Link className="home" to="/home">GamesPlay</Link></h1>
            <nav>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/games">All games</NavLink>
                <div id="user">
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/create">Create Game</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/login">Login</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/register">Register</NavLink>
                </div>
            </nav>
        </header >
    )
}

export default Header