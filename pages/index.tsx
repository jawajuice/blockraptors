import React from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "../components/Light";
import Model from "../components/Model";
import { OrbitControls } from '@react-three/drei';
import { useState, useCallback, useEffect } from 'react';
import Typing from 'react-typing-animation';
import {Link} from 'react-scroll'
import VisibilitySensor from 'react-visibility-sensor';

const useMediaQuery = (width) => {

    const [targetReached, setTargetReached] = useState(false);
    const updateTarget = useCallback((e) => {
        if (e.matches) {
          setTargetReached(true);
        } else {
          setTargetReached(false);
        }
      }, []);
    
      useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);
    
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
          setTargetReached(true);
        }
    
        return () => media.removeListener(updateTarget);
      }, []);
    
      return targetReached;
    };

const App = () => {

    const isBreakpoint = useMediaQuery(768)

    return (
        <>
            <div className="canvas-div">
                <Canvas camera={{ position: [0, 0, 3] }}>
                    <Lights />
                    <Model />
                    <OrbitControls
                            enablePan={false}
                            enableZoom={false}
                            autoRotate={true}
                    />
                </Canvas>
            </div>
            <div className="canvas-wrapper">
                <div className="bottom-container">
                { isBreakpoint ? (
                    <div className="scroll-container">
                        <Link className="nav-link-scroll" activeClass="active" to="description" spy={true} smooth={true}>44</Link>
                    </div>
                ) : (
                    <div className="scroll-container">
                    </div>
                )}
                </div>
            </div>
            <div className="content-wrap">
                <div className="description">
                    <Typing speed={38}>
                    <div className="title">
                    A new kind of prehistoric predator has emerged from the blockchain.<br/>1000 unique handcrafted models.<br/>get yours before another mass extinction event occurs.<br/>
                      
                    
                    </div>
                    <div className="market-title"><h2>SPECIES ONE</h2></div>
                    <div className="market-description">Pre-release event 12.12.2021</div>
                    </Typing>
                </div>
                <div className="gridwrapper">
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450711176310947841" ><img src="icons/raptors/1.png" className="raptor-img"></img>Blockraptor #1</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450722171427225601"><img src="icons/raptors/18.png" className="raptor-img"></img>Blockraptor #18</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450713375334203393"><img src="icons/raptors/3.png" className="raptor-img"></img>Blockraptor #3</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450714474845831169"><img src="icons/raptors/7.png" className="raptor-img"></img>Blockraptor #7</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450715574357458945"><img src="icons/raptors/9.png" className="raptor-img"></img>Blockraptor #9</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450716673869086721"><img src="icons/raptors/10.png" className="raptor-img"></img>Blockraptor #10</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450717773380714497"><img src="icons/raptors/13.png" className="raptor-img"></img>Blockraptor #13</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450728768496992257"><img src="icons/raptors/30.png" className="raptor-img"></img>Blockraptor #30</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450726569473736705"><img src="icons/raptors/26.png" className="raptor-img"></img>Blockraptor #26</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450725469962108929"><img src="icons/raptors/23.png" className="raptor-img"></img>Blockraptor #23</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450721071915597825"><img src="icons/raptors/16.png" className="raptor-img"></img>Blockraptor #16</a></div>
                    <div className="box nav-link"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/75390837743260919610452455920654103883809411127266016681420450718872892342273"><img src="icons/raptors/14.png" className="raptor-img"></img>Blockraptor #14</a></div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-wrapper">
                        <h1 className="roadmap-title"> Roadmap </h1>
                        <ul className="sessions">
                        <li className="timeline-list">
                            <div className="time">10%</div>
                            <p>12.12. pre-release minting event.<br/> 50 blockraptors released & weekly giveaways. <br/>Be sure to Follow our twitter for more details.</p>
                        </li>
                        <li className="timeline-list">
                            <div className="time">25%</div>
                            <p>launch event 1000 blockraptors released.</p>
                        </li>
                        <li className="timeline-list">
                            <div className="time">50%</div>
                            <p>HODLERS will be able to claim a free png <br/>nft profile pic of their blockraptor.</p>
                        </li>
                        <li className="timeline-list">
                            <div className="time">75%</div>
                            <p>5% of total sales will be donated to <br/>endangered animal species conservation.</p>
                        </li>
                        <li className="timeline-list">
                            <div className="time">100%</div>
                            <p>blockraptor offspring season. <br/>baby blockraptors & blockeggs released.</p>
                        </li>
                        </ul>
                    </div>
                </div> 
                <div className="links-wrapper">
                    <div className="links-title"><h1 className="roadmap-title">Links</h1></div>
                    <div className="links-grid">
                    <a className="boxlink nav-link" href="https://opensea.io/collection/blockraptorsspecies1"><div className="link-container"><img src="icons/links/opensea.png" className="link-logo"></img><h3>OPENSEA</h3></div></a>
                    <a className="boxlink nav-link" href="https://twitter.com/BlockRaptors"><div className="link-container"><img src="icons/links/twitter.png" className="link-logo"></img><h3>Twitter</h3></div></a>
                    </div>
                </div>              
            </div>
            <footer>
            ©  2021 blockraptors
            </footer>
        </>
     );
};

export default App