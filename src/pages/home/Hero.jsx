import React from 'react';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero__container container">
                <div className="hero__top">
                    <img src="./assets/img/hero/hero-img.png" alt="Ui Bazar Logo" className="hero__img" />
                </div>

                <div className="hero__middle">
                    <p className='hero__middle-tag'>Featured </p>
                    <p className='hero__middle-text'>Discover how our innovative designs transform brands, enhance websites, and elevate user experiences. Check out the projects</p>
                    <p className='hero__middle-tag'>Featured </p>
                </div>

                <div className="hero__bottom">
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-1.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-2.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-3.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-4.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-5.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                    <div className='hero__bottom-item'>
                        <img src="./assets/img/hero/hero-featured-6.png" alt="UI Bazar Featured Image" className='hero__bottom-image' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;