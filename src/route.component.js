
import { Routes, Route, Navigate } from "react-router-dom";
//Common
// import PageNotFound from '../pages/404Page';
import HomePage from "./pages";


export default function RouteComponent() {
  
    return (
        <Routes>
           <Route path="/" element={<HomePage />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
}