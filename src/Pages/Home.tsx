import React from "react";
import BackgroundImage from '../Assets/Images/InnovateBTechnology.jpg'
import { Container, DefaultHelmet } from "nl-ui";
import '../Scss/home.scss'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                Title="Innlandet IT"
            />
            <Navbar />
            <section id="welcome">
                <div className="background-img">
                    <img src={BackgroundImage} alt="Backgroundimage" />
                </div>
                <div className="home-welcome">
                    <div>
                        <h1>Innlandet IT</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem similique adipisci voluptatum doloremque deserunt dolores architecto in, minima vero.</p>
                    </div>
                </div>
            </section>
            <section id="om-oss">
                <div className="om-oss_content">
                    <h2>Om oss</h2>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Home;