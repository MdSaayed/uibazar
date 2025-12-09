import React from 'react';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';

const pricing = () => {
    return (
        <section className='pricing'>
            <div class="pricing__container container">
                <div class="pricing__header">
                    <div class="pricing__header-left">
                        <Subtitle text='Our Pricing' className='pricing__subtitle' />
                        <Title text='Pricing Plans' className='pricing__title title-xxl' />
                    </div>
                    <div class="pricing__header-right">
                        <p class="pricing__desc desc-xl">Whether you're just starting out or scaling up, we offer plans that match your pace with no hidden fees, ever</p>
                    </div>
                </div>

                <div class="pricing__cards">
                    <div class="card card--light">
                        <div class="card__top">
                            <div class="card__top-left">
                                <div class="card__brand-wrap">
                                    <img src="../assets/img/global/pricing-card-logo-light.png" alt="Ui Bazar" class="card__brand-img" />
                                </div>
                                <h3 class="card__plan-name">Quick Launch</h3>
                                <p class="card__subtext">Growing teams & businesses</p>
                            </div>

                            <div class="card__top-right">
                                <p class="card__price">$199 <span class="card__period">/mo</span></p>
                            </div>
                        </div>

                        <hr class="card__divider" />

                        <div class="card__bottom">
                            <div class="card__includes-label">Includes:</div>

                            <ul class="card__features">
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> A dedicated Senior Designer
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Smooth workflow using Slack, Loom, and Notion.
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Design updates every 48 hours
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Flat-rate pricing, no hidden fees.
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Dev in Webflow/Framer
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Feature text goes here
                                </li>
                            </ul>

                            <Link to='/pricing-details' class="card__btn card__btn--dark">Get started</Link>
                        </div>
                    </div>

                    <div class="card card--dark">
                        <div class="card__top">
                            <div class="card__top-left">
                                <div class="card__brand-wrap">
                                    <img src="../assets/img/global/pricing-card-logo-dark.png" alt="Ui Bazar" class="card__brand-img" />
                                </div>
                                <h3 class="card__plan-name">Monthly Retainer Plan</h3>
                                <p class="card__subtext">Growing teams & businesses</p>

                            </div>

                            <div class="card__top-right">
                                <p class="card__price">$599 <span class="card__period">/mo</span></p>
                            </div>
                        </div>

                        <hr class="card__divider" />

                        <div class="pricing__card-bottom">
                            <div class="card__includes-label">Includes:</div>

                            <ul class="card__features">
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Senior Designer, Developer, Copywriter, Project Manager.
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Tasks done in 48 hours.
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Creative team led by a committed project coordinator
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Weekly async project updates
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Unlimited design requests
                                </li>
                                <li class="card__feature-item">
                                    <span class="card__icon">✓</span> Flexible: Pause, upgrade, or cancel anytime
                                </li>
                            </ul>

                            <Link to='/pricing-details' class="card__btn card__btn--light">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default pricing;