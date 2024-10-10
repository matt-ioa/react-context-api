import NameInput from "../NameInput/index.jsx";
import UserContext from "../UserContext/index.jsx";
import { useContext } from "react";

const Form = () => {
    const {changeUser} = useContext(UserContext)
    return (
        <form onChange={(e) => changeUser(e.target.value)}>
           <NameInput />
        </form>
    )
}

export default Form