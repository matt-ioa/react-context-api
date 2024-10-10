import UserContext from "../UserContext/index.jsx";
import { useContext } from "react";

const NavBar = () => {
    const {user} = useContext(UserContext)

    return (
        <nav>
            <div>Welcome back {user}</div>
        </nav>
    )
}


export default NavBar