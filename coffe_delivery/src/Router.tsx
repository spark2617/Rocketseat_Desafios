import { Route, Routes } from "react-router-dom";
import { Home } from "./pag/home";
import { ServiceDelivery } from "./pag/checkout/Index.tsx"
import { SuccessPag } from "./pag/sucess/index.tsx"
import { LayoutDefault } from "./layoutDefault/LayoutDefault";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LayoutDefault/>}>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<ServiceDelivery />} />
                <Route path="/success" element={<SuccessPag />} />
            </Route>
        </Routes>
    )
}