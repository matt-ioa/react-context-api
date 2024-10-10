import UserContext from "../UserContext/index.jsx";
import { useContext } from "react";

const NameInput = () => {
    const {user} = useContext(UserContext)

    return (
        <input type='text' name='name' value={user}/>
    )
}

export default NameInput