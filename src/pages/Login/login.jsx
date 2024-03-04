import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const resposta = login(email, senha); 

        if(resposta) {
            setError(resposta);
            return;
        };

        navigate("/home");
    };

    return (
        <>
        <h1>Sistema de Login</h1>
        <form action="#" className="form-login">
            <Input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
            <Input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}/>
            <Button Text="Entrar" onClick={handleLogin}/>
            <div><p>Não tem uma conta? <Link to="/cadastro">&nbsp;Cadastre-se</Link></p></div>
            <div>{error}</div>
        </form>
        </>
    )
}

export default Login