import { useContext } from "react";
import { AuthContext } from "../contexts/autenticacao";

const useAuth = () => {
    const contexto = useContext(AuthContext);

    return contexto;
}

export default useAuth