import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import ProjectsGrid from './Projects';

const Projects = () => {
    return (
        <>
            <Header />
            <ProjectsGrid />
            <Footer />
        </>
    );
};

export default Projects;