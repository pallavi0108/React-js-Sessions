import React from "react"
import ReactDOM from "react-dom"
import Footer from "./Footer.js"
import Header from "./Header.js"
import MainContent from "./MainContent.js"

function App(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default App