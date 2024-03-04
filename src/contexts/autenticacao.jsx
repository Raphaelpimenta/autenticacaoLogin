import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    //Autenticação de usuário
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("users_bd");

        console.log("userToken", userToken)
        console.log("userStorage", userStorage)

        if(userToken && userStorage) {
            const temUsuario = JSON.parse(userStorage)?.filter((user) => {
                user.email === JSON.parse(userToken).email
            });
    
            if(temUsuario) {
                setUser(temUsuario[0]);
            }

        }
    }, []);

    //Login
    const login = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem("users_bd"));

        // const temUsuario = userStorage?.filter((user) => {
        //      user.email === email;
        // });

        const temUsuario = userStorage.find((user) => {
            user.email === email
        });

        console.log(temUsuario)

        if(temUsuario?.length) {
            if(temUsuario.email === email && temUsuario.password === password){
                const tokenFalso = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, tokenFalso }));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    //Cadastro
    const cadastro = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem("users_bd"));

        const temUsuario = userStorage?.filter((user) => {
            user.email === email;
        });

        if (temUsuario?.length) {
            return "Já existe uma conta com esse e-mail"
        }

        let novoUsuario; 

        if(userStorage) {
            novoUsuario = [...userStorage, {email, password}];
        } else {
            novoUsuario = [{email, password}];
        }

        localStorage.setItem("users_bd", JSON.stringify(novoUsuario));

        return;
    }

    //Sair
    const deslog = () => {
        setUser(null);
        localStorage.removeItem("user_token")
    }

    

    return (
        <AuthContext.Provider value={{user, logado: !!user, login, cadastro, deslog }}>{children}</AuthContext.Provider>
    )




}