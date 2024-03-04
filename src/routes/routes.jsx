import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Cadastro from "../pages/Cadastro/cadastro";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const logado = useAuth();

    return logado > 0 ? <Item/> : <Login />
}


const RoutesApp = () => {
    
    return (

        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={ Home }/>}/>
                    <Route path="/" element={<Login />}/>
                    <Route exact path="/cadastro" element={<Cadastro />}/>
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    )
}

export default RoutesApp