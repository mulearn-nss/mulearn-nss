import "./App.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import AllEvents from "./Components/Events/AllEvents";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";

// ScrollToAnchor component to handle hash scrolling when navigating to /#section
const ScrollToAnchor = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return null;
};

const MainLayout = () => {
    return (
        <>
            <Home />
            <About />
            <Events />
            <Gallery />
            <Statistics />
            <ExploreLC />
            <Team />
            <Connect />
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <ScrollToAnchor />
            <div className="appWrapper">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/events" element={<AllEvents />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
