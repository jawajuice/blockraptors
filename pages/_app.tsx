import '../styles/globals.css'
import '../styles/glitch.scss'
import Head from "next/head";
import React from "react";
import Model from "../components/Model";
import {Link} from 'react-scroll'

if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
    });
}

function App({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <link rel="icon" href="icons/raptors/16.png"></link>
                <title>BlockRaptors</title>
            </Head>
            <div className="logo-container">
                    <span className="glitch" data-text="Blockraptors">
                    <Link className="logo-link" activeClass="active" to="canvas-div" spy={true} smooth={true}>Blockraptors</Link>
                    </span>
            </div>
            <header className="header">
                <nav className="navbar">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="description" spy={true} smooth={true}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="timeline-container" spy={true} smooth={true}>Roadmap</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="links-wrapper" spy={true} smooth={true}>Links</Link>
                            </li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                </nav>
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;