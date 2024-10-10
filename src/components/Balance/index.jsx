import UserContext from "../UserContext/index.jsx";
import { useContext } from "react";

const Balance = () => {
    const {user} = useContext(UserContext)

    return (
        <h1 className='balance'>
            {user} you have £0 in your account
        </h1>
    )
}

export default Balance