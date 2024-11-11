
import { Routes, Route, Navigate } from "react-router-dom";
//Common
// import PageNotFound from '../pages/404Page';
import HomePage from "./pages";
import Login from "./pages/login";
import AllProducts from "./pages/productlist";



export default function RouteComponent() {
  
    return (
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/pages/login" element={<Login />} />
           <Route path="/pages/productlist" element={<AllProducts/>} />
          
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
}