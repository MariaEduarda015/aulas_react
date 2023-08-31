import {Routes, Route} from "react-router-dom"
import  Primeira from "./pages/Primeira"
import Segunda from"./pages/Segunda"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Primeira/>}/>
            <Route path="/Segunda" element={<Segunda/>}/>
        </Routes>
    )
}

export default Router