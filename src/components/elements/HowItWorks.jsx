import React from 'react';
import Subtitle from '../Subtitle';
import Title from '../Title';

const HowItWorks = () => {
    return (
        <section className='how-it-works'>
            <div class="how-it-works__container container">
                <div class="how-it-works__header">
                    <div class="how-it-works__left">
                        <Subtitle text='How it works' className='how-it-works__subtitle' />
                        <Title text='You Manage, We Design' className='how-it-works__title title-xxl' />
                    </div>

                    <div class="how-it-works__right">
                        <p class="how-it-works__desc desc-xl">Whether you're just starting out or scaling up, we offer plans that match your pace with no hidden fees, ever
                        </p>
                    </div>
                </div>

                <div class="step__cards">
                    <div class="step__card">
                        <p class="step__card-subtitle">STEP 1</p>
                        <div class="step__card-icon-wrap">
                            <img src="../assets/img/step/step-1.png
                            " alt="You book a free call" class="step__card-icon" />
                        </div>
                        <h2 class="step__card-title">You book a free call</h2>
                        <p class="step__card-text text-normal">We explore your business thoroughly to find design solutions that fit your objectives.</p>
                    </div>

                    <div class="step__card">
                        <p class="step__card-subtitle">STEP 2</p>
                        <div class="step__card-icon-wrap">
                            <img src="../assets/img/step/step-2.png
                            " alt="You book a free call" class="step__card-icon" />
                        </div>
                        <h2 class="step__card-title">We send an expert team.</h2>
                        <p class="step__card-text text-normal">We’ll handle your design needs so you can focus on growing your startup.</p>
                    </div>

                    <div class="step__card">
                        <p class="step__card-subtitle">STEP 1</p>
                        <div class="step__card-icon-wrap">
                            <img src="../assets/img/step/step-3.png
                            " alt="You book a free call" class="step__card-icon" />
                        </div>
                        <h2 class="step__card-title">We deliver work daily</h2>
                        <p class="step__card-text text-normal">Stay updated daily on our progress. We're your trusted partner throughout the entire process.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;