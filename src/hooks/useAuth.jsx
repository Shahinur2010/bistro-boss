import { useContext } from "react"
import { AuthConText } from "../providers/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthConText);
    return auth;
}

export default useAuth;