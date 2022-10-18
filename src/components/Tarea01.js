// Tarea 01:
// Agregue las rutas necesarias para que la navbar esté completa.
// Los endpoints (paths) correspondientes son:
// - sign-up
// - products
// - login
// Y los componentes correspondientes son:
// - SignUpFormMPA
// - ProductsMPA
// - LoginFormMPA
// Respectivamente...
// Tome como ejemplo la Route de "index" o el ejemplo N°2 de clase.

// Componentes y librerías auxiliares:
import App from "../App";
import NavbarMPA from "./mpa_components/05_navbar";
import IndexMPA from "./mpa_components/01_index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componente a insertar:
import SignUpFormMPA from "./mpa_components/02_signUpForm";
import ProductsMPA from "./mpa_components/03_products";
import LoginFormMPA from "./mpa_components/04_loginForm";

const Tarea01 = () => {
    return (
        <>
            <NavbarMPA />
            <BrowserRouter>
                <Routes path="/" element={<App />}>
                    <Route path="index" element={<IndexMPA />}></Route>
                    {/* 
                      *
                        Escriba su código aquí! 
                      *
                      */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Tarea01;

// Respuesta:
// const Tarea01 = () => {
//     return (
//         <>
//             <NavbarMPA />
//             <BrowserRouter>
//                 <Routes path="/" element={<App />}>
//                     <Route path="index" element={<IndexMPA />}></Route>
//                     <Route path="sign-up" element={<SignUpFormMPA />}></Route>
//                     <Route path="products" element={<ProductsMPA />}></Route>
//                     <Route path="login" element={<LoginFormMPA />}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default Tarea01;