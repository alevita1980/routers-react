// Tarea 03:
// Descomente y resuelva los problemas de sintaxis del siguiente código:

// Componentes y librerías auxiliares:
import App from "../App";
import NavbarMPA from "./mpa_components/05_navbar";
import IndexMPA from "./mpa_components/01_index";
import SignUpFormMPA from "./mpa_components/02_signUpForm";
import ProductsMPA from "./mpa_components/03_products";
import LoginFormMPA from "./mpa_components/04_loginForm";
import NotFound from "./common/404";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Tarea03 = () => {
    return (
        <>
             <NavbarMPA />
            <BrowserRouter>
                <Routes path="/" element={<App />}>
                    <Route path="index" element={<IndexMPA />}></Route>
                    <Route path="sign-up" element={<SignUpFormMPA />}></Route>
                    <Route path="products" element={<ProductsMPA />}></Route>
                    <Route path="login" element={<LoginFormMPA />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default Tarea03;