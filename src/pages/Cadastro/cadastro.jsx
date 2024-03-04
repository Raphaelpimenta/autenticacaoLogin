import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [emailConfirma, setEmailConfirma] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { cadastro } = useAuth();

    const handleCadastro = () => {
        if(!email | !emailConfirma | !senha ) {
            setError("Preencha todos os campos");
            return;
        } else if(email !== emailConfirma) {
            setError("Os e-mails não são iguais");
            return;
        }

        const resposta = cadastro(email, senha);

        if(resposta) {
            setError(resposta);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }


    return (
        <>
        <h1>Sistema de cadastro</h1>
        <form action="#" className="form-login">
            <Input type="email" placeholder="Digite seu E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
            <Input type="email" placeholder="Confirme seu E-mail" value={emailConfirma} onChange={(e) => [setEmailConfirma(e.target.value), setError("")]}/>
            <Input type="password" placeholder="Digite a sua senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}/>
            <div>{error}</div>
            <Button Text="Inscreva-se" onClick={handleCadastro}/>
            <div>
                <p>Já tem uma conta?</p>
                <Link to="/">&nbsp;Entre</Link>
            </div>
        </form>
        </>
    )
}

export default Cadastro