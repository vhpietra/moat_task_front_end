import React from "react"
import { BrowserRouter } from "react-router-dom"

import './css/reset.css'
import './css/style.css'
// import Albums from "./Albums"
// import Artists_list from "./Artists_list"
// import Login from "./Login"
// import Sign_up from "./Sign_up"
import Header from "./Header"

export default function App() {
    return(
        <BrowserRouter>
            <Header/>

        </BrowserRouter>
    )
}