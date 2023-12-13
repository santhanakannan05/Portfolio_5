import React from 'react';
import Project from '../Project/Project';
import './Projectcontainer.css';

const Projectcontainer = () => {
    const projects = [
        {
            img:"",
            title: "react",
            desc: "I have create my own portfolio by using react js  ",
            link: "https://github.com/santhanakannan05/santhanakannan05.git",
        },
        {
            img: "",
            title: "Image",
            desc: "Download and use 70000+ 4k Wallpaper stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images ..",
            link: "www.google.com"
        },
        {
            img: "",
            title: "Image",
            desc: "Download and use 70000+ 4k Wallpaper stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images ..",
            link: "www.google.com"
        },
        {
            img: "",
            title: "Image",
            desc: "Download and use 70000+ 4k Wallpaper stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images ..",
            link: "www.google.com"
        },
        {
            img: "",
            title: "Image",
            desc: "Download and use 70000+ 4k Wallpaper stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images ..",
            link: "www.google.com"
        },
        {
            img: "",
            title: "Image",
            desc: "Download and use 70000+ 4k Wallpaper stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images ..",
            link: "www.google.com"
        }
        // Add more project objects here...
    ];

    return (
        <div className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects I've done to make people's lives easier.
            </p>
            <div className='projectcontainer_projects'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projectcontainer;
