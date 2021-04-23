import React from 'react'
import Form from "../Order/Order";
import png1 from "./../static/images/1.webp";
import png2 from "./../static/images/2.webp";
import png3 from "./../static/images/3.jpg";
import png4 from "./../static/images/4.webp";
import { Switch, Route, Link } from "react-router-dom";
import './index.css';
const Home = () => {
    return (
        <div id='home'>

            <h1>The home page</h1>
            <h2>This is a car sales website</h2>
            {/* <img src={treefrog} alt="tree frog" /> */}

            {/* <Form /> */}
            <div className='pngline '>
                <div className='fn-clear'>
                    <div className='btns fl'>
                        <div className='png'><img src={png1} alt="" /></div>
                        <p>The new CLS.</p>
                    </div>
                    <div className='btns fl'>
                        <div className='png'><img src={png2} alt="" /></div>
                        <p>
                            The A-Class: An ASMR experience.
                        </p>
                    </div>
                    <div className='btns fl'>
                        <div className='png'><img src={png3} alt="" /></div>
                        <p>
                            Mercedes-Benz 170 V: The best-seller of 1936.
                    </p>
                    </div>
                    <div className='btns fl'>
                        <div className='png'><img src={png4} alt="" /></div>
                        <p>
                            The EQV: Electric, versatile, intelligent.
                    </p>
                    </div>
                </div>
                <Link to="/product" className='defaultbtn'>Show More</Link>
            </div>
            <div className='footerbtn'>
               
                <Link to="/contact">Contact us</Link>&emsp;
              
                    <Link to="/thank">Thank you</Link>&emsp;
              
                    <Link to="/aboutus">About us</Link>
              
            </div>
        </div>
    )
}

export default Home
