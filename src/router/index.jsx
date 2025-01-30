import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "../components/Header"

import Home from "../pages/Home"
import About from "../pages/About"
import Menu from "../pages/Menu"
import Orders from "../pages/Orders"
import Stories from "../pages/Stories"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import Footer from "../components/Footer"

export function Routers() {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={ <About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/stories" element={<Stories />} /> 
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    )
}
