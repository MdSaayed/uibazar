import React from 'react';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';

const Projects = () => {
    return (
        <section className='projects'>
            <div class="projects__container container">
                <div class="projects__header">
                    <div class="projects__header-left">
                        <Subtitle text={'Works'} className={'projects__subtitle'} />
                        <Title text={'Projects.'} className={'projects__title title-xxl'} />
                        <p class="project__desc desc-xl">Foliox is a unique digital agency that blends creativity with smart strategies, making them truly stand out.</p>
                    </div>
                </div>

                <div class="projects__grid">
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                    <div class="projects__card">
                        <div class="projects__card-thumb-wrap">
                            <img src="../assets/img/projects/projects-1.png" alt="" class="projects__thumb-img" />
                        </div>
                        <div class="projects__card-content">
                            <h2 class="projects__card-title"> LumePay</h2>
                            <span class="projects__card-cat">Branding</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;