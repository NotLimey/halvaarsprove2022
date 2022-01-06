import React from "react";
import BackgroundImage from '../Assets/Images/InnovateBTechnology.jpg'
import { Container, DefaultHelmet } from "nl-ui";
import '../Scss/home.scss'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Male1, Male2, Male3, Male4, Male5, Female1, Female2, Male6 } from "../Assets/Images/Employes/index";

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
                <div className="default-container om-oss_container">
                    <h2>Om oss</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum culpa numquam maxime, similique nulla nisi nostrum. Magni eveniet et id esse perspiciatis maxime officiis est sed quos iusto mollitia, impedit quo explicabo porro possimus consectetur facere? Quaerat, sint molestiae!</p>
                </div>
                <div className="default-container mt-5 mb-5">
                    <h2 className="text-center vårt-team_header">Vårt team!</h2>
                    <div className="ansatte-container">
                        <div>
                            <img src={Male1} alt="" />
                            <h3>Oskar Fjernsno</h3>
                            <p>Oskar@innlandetIt.no</p>
                            <p><i>IT Konsulent</i></p>
                        </div>
                        <div>
                            <img src={Male6} alt="" />
                            <h3>Robbie Viken</h3>
                            <p>Robbie@innlandetIt.no</p>
                            <p><i>Leder av Reperasjon</i></p>
                        </div>
                        <div>
                            <img src={Female2} alt="" />
                            <h3>Amelia Olsen</h3>
                            <p>Amelia@innlandetIt.no</p>
                            <p><i>Leder i kundeservice</i></p>
                        </div>
                        <div>
                            <img src={Male2} alt="" />
                            <h3>Bob Kåre Laksveis</h3>
                            <p>Bob.Kåre@innlandetIt.no</p>
                            <p><i>Reperasjon</i></p>
                        </div>
                        <div>
                            <img src={Male4} alt="" />
                            <h3>Keith Vendela</h3>
                            <p>Keith@innlandetIt.no</p>
                            <p><i>Reperasjon</i></p>
                        </div>
                        <div>
                            <img src={Male5} alt="" />
                            <h3>Emanuel Otten</h3>
                            <p>Emmanuel@innlandetIt.no</p>
                            <p><i>Reperasjon</i></p>
                        </div>
                        <div>
                            <img src={Male3} alt="" />
                            <h3>Kim Marun</h3>
                            <p>Kim@innlandetIt.no</p>
                            <p><i>Kundeservice</i></p>
                        </div>
                        <div>
                            <img src={Female1} alt="" />
                            <h3>Veronica Willen</h3>
                            <p>Veronica@innlandetIt.no</p>
                            <p><i>Kundeservice</i></p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Home;