import logo from "./logo.svg";
import "./App.css";

// Importamos React Router:
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";

// Importamos los componentes MPA:
import IndexMPA from "./components/mpa_components/01_index";
import SignUpFormMPA from "./components/mpa_components/02_signUpForm";
import ProductsMPA from "./components/mpa_components/03_products";
import LoginFormMPA from "./components/mpa_components/04_loginForm";
import NavbarMPA from "./components/mpa_components/05_navbar";
import NavbarMPAAuth from "./components/mpa_components/06_navbarAuth";
import NotFound from "./components/common/404";
import {
  IndexMPAAuth,
  ProductsMPAAuth,
  SignUpFormMPAAuth,
} from "./components/mpa_components/07_recursosLibres";
import {
  UserInfoMPAAuth,
  WishlistMPAAuth,
  CartMPAAuth,
} from "./components/mpa_components/08_recursosProtegidos";
// Componentes SPA:
import NavbarSPAAuth from "./components/spa_components/09_navbarAuthSPA";
import {
  IndexSPAAuth,
  SignUpFormSPAAuth,
  ProductsSPAAuth,
} from "./components/spa_components/10_recursosLibresSPA";
import {
  UserInfoSPAAuth,
  WishlistSPAAuth,
  CartSPAAuth,
} from "./components/spa_components/11_recursosProtegidosSPA";

function App() {
  const authorized = false;
  return (
    <div className="App">
      <header className="App-header">
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 1: estructura básica de React Router: */}
        {/* <BrowserRouter>
          <Routes path="/" element={<App />}>
            <Route path="index" element={<IndexMPA />}></Route>
          </Routes>
        </BrowserRouter> */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 2: estructura básica pero con los recursos libres del sitio: */}
        {/* <BrowserRouter>
          <Routes path="/" element={<App />}>
            <Route path="index" element={<IndexMPA />}></Route>
            <Route path="sign-up" element={<SignUpFormMPA />}></Route>
            <Route path="products" element={<ProductsMPA />}></Route>
            <Route path="login" element={<LoginFormMPA />}></Route>
          </Routes>
        </BrowserRouter> */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 3: Aplicamos la barra de navegación como un componente visual: */}
        {/* <BrowserRouter>
          <Routes path="/" element={<App />}>
            <Route path="index" element={<IndexMPA />}></Route>
            <Route path="sign-up" element={<SignUpFormMPA />}></Route>
            <Route path="products" element={<ProductsMPA />}></Route>
            <Route path="login" element={<LoginFormMPA />}></Route>
          </Routes>
        </BrowserRouter>
        <NavbarMPA /> */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 4: Aplicamos un flag de autorización para ver los recursos restringidos: */}
        {/* <BrowserRouter>
          <Routes path="/" element={<App />}>            
            <Route path="/" element={<IndexMPAAuth />}></Route>
            <Route path="index" element={<IndexMPAAuth />}></Route> 
            <Route path="sign-up" element={<SignUpFormMPAAuth />}></Route>
            <Route path="products" element={<ProductsMPAAuth />}></Route>
            <Route path="user-info" element={<UserInfoMPAAuth auth={authorized} />}></Route>
            <Route path="wishlist" element={<WishlistMPAAuth auth={authorized} />}></Route>
            <Route path="cart" element={<CartMPAAuth auth={authorized}  />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <NavbarMPAAuth authorized = {authorized}/> */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 5: Redireccionamiento: */}
        {/* <BrowserRouter>
          <Routes path="/" element={<App />}>
            <Route path="/" element={<IndexMPAAuth />}></Route>
            <Route path="index" element={<IndexMPAAuth />}></Route>
            <Route path="sign-up" element={<SignUpFormMPAAuth />}></Route>
            <Route path="products" element={<ProductsMPAAuth />}></Route>
            <Route path="/user-info" element={authorized? <UserInfoMPAAuth auth={authorized}/> : <Navigate to="/login" /> } />
            <Route path="/wishlist" element={authorized? <WishlistMPAAuth auth={authorized} /> : <Navigate to="/login" /> } />
            <Route path="/cart" element={authorized? <CartMPAAuth auth={authorized} /> : <Navigate to="/login" /> } />
            <Route path="login" element={<LoginFormMPA />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      <NavbarMPAAuth authorized = {authorized}/> */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Ejemplo 6: SPA: */}
        {/* <HashRouter>
          <Routes path="/" component={App}>
            <Route
              path="/"
              component={IndexSPAAuth}
              element={<IndexSPAAuth />}
            ></Route>
            <Route
              path="/index"
              component={IndexSPAAuth}
              element={<IndexSPAAuth />}
            ></Route>
            <Route
              path="/sign-up"
              component={SignUpFormSPAAuth}
              element={<SignUpFormSPAAuth />}
            ></Route>
            <Route
              path="/products"
              component={ProductsSPAAuth}
              element={<ProductsSPAAuth />}
              ></Route>
            <Route
              path="/user-info"
              component={UserInfoSPAAuth}
              element={<UserInfoSPAAuth auth={authorized}/>}
            ></Route>
            <Route
              path="/wishlist"
              component={WishlistSPAAuth}
              element={<WishlistSPAAuth auth={authorized} />}
            ></Route>
            <Route
              path="/cart"
              component={CartSPAAuth}
              element={<CartSPAAuth auth={authorized}/>}
            ></Route>
          </Routes>
          <NavbarSPAAuth auth={authorized}/>
        </HashRouter> */}
      </header>
    </div>
  );
}

export default App;
