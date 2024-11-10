import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className='heroSection' id="heroSection">
        <Navbar/>
        <div className='container'>
            <div className="banner">
                <div className="largeBox">
                    <h1 className='title'> DELICIOUS</h1>
                </div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="/Vadapav.jpg" alt="hero1" />
                    </div>
                    <div className="textAndlogo">
                        <div className="textWithSvg">
                            <h1 className='title'>FOOD</h1>
                            <h1 className='title dishes_title'> DISHES </h1>
                            <img src="/threelines.svg" alt="three" />
                        </div>
                        {/* <img src="/logo1.png" alt="logo" className='logo'/> */}
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="imageBox">
                    <img src="/hero2.png" alt="hero2" />
                </div>
                <h1 className='title dishes_title'>DISHES</h1>
            </div>
        </div>
    </section>
  )
}

export default HeroSection