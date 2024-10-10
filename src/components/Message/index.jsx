import UserContext from "../UserContext/index.jsx";
import { useContext } from "react";

const Message = () => {
    const {user} = useContext(UserContext)

    return (
        <div className="message">
            Message for {user}
        </div> )
}

export default Message