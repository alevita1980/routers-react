// Tarea 04:
// Al ejercicio anterior, agreguele el componente <NotFound/>
// para que al ingresar una url inexistente se renderice.
// (Puede probarlo al ingresar en la barra de busquede de su navegardor cualquier
// URL que no se encuentre en la Navbar como por ejemplo: http://localhost:3000/noexisto)

// Componentes y librerías auxiliares:
import App from "../App";
import NavbarMPA from "./mpa_components/05_navbar";
import IndexMPA from "./mpa_components/01_index";
import SignUpFormMPA from "./mpa_components/02_signUpForm";
import ProductsMPA from "./mpa_components/03_products";
import LoginFormMPA from "./mpa_components/04_loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./common/404";

const Tarea04 = (props) => {
    const authorized = props.authorized; 
    return (
        <>
            <NavbarMPA />
            <BrowserRouter>
                <Routes path="/" element={<App />}>
                    <Route path="index" element={<IndexMPA />}></Route>
                    <Route path="sign-up" element={<SignUpFormMPA />}></Route>
                    <Route path="products" element={<ProductsMPA />}></Route>
                    <Route path="login" element={authorized ? <IndexMPA /> : <LoginFormMPA /> }></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <div> Estado: {authorized ? "✅ Autorizado" : "❌ No autorizado" }</div>
            </BrowserRouter>

        </>
    )
}

export default Tarea04;

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
//                     <Route path="*" element={<NotFound />}></Route>   {/* 👈👈👈 */}
//                  </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default Tarea01;