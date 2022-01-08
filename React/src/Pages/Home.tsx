import React, { useEffect, useState } from "react";
import BackgroundImage from '../Assets/Images/InnovateBTechnology.jpg'
import { DefaultHelmet } from "nl-ui";
import '../Scss/home.scss'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Laptop, Lock } from "../Assets/Images/index";
import { IEmployee } from "../Store/types";
import { RootStateOrAny, useSelector } from "react-redux";

const Home = () => {
    const Employees = useSelector<RootStateOrAny, IEmployee[]>(state => state.employees);

    return (
        <React.Fragment>
            <DefaultHelmet 
                Title="Innlandet IT"
            />
            <Navbar />
            <section id="home">
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
            <section id="omoss">
                <div className="default-container om-oss_container">
                    <h2>Om oss</h2>
                    <div className="default-2-content">
                        <div className="om-oss__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem tenetur sit fugiat ipsa hic ipsam et veritatis sapiente iste sint deleniti laborum cupiditate inventore laudantium porro ea placeat in nesciunt id enim, repellat provident necessitatibus adipisci. Soluta, est! Ut at modi porro voluptatibus tempore magni corporis ex ad sunt?</p>
                        </div>
                        <div className="three_d-ilustration">
                            <img data-aos="zoom-in" src={Laptop} alt="laptop" />
                        </div>
                    </div>
                    <div className="default-2-content">
                        <div className="three_d-ilustration">
                            <img data-aos="zoom-in" src={Lock} alt="Lock" />
                        </div>
                        <div className="om-oss__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem tenetur sit fugiat ipsa hic ipsam et veritatis sapiente iste sint deleniti laborum cupiditate inventore laudantium porro ea placeat in nesciunt id enim, repellat provident necessitatibus adipisci. Soluta, est! Ut at modi porro voluptatibus tempore magni corporis ex ad sunt?</p>
                        </div>
                    </div>
                </div>
                <div id="vaartteam" className="default-container mb-5 vårt-team">
                    <h2 className="text-center vårt-team_header">Vårt team!</h2>
                    <div className="ansatte-container">
                        {Employees?.map((employee : any, i : number) => 
                            <div key={`Employee[${i}]`}>
                                <img src={employee.image} alt="" />
                                <h3>{employee.name}</h3>
                                <p>{employee.email}</p>
                                <p><i>{employee.role}</i></p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Home;