import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const deslog = useAuth();
    const navigate = useNavigate();

    return (
        <>
        <h1>Home</h1>
        <Button Text="Sair" onClick={() => [deslog(), navigate("/")]}>Sair</Button>
        </>
    )
}

export default Home