import React from 'react';
import ProjectCard from './ProjectCard';
import malware from "./malware.jpg";
import movies from "./movies.jpeg";
import notes from "./notes.jpeg";
import "./projects.css";

function Projects() {
    return (
        <div className='project_subcontainer'>
            <div className='projects'>
                <div className='project_title'><span id='title_box'>PROJECTS</span></div>
                <div className='project'>
                    <ProjectCard img={malware} title="Malware Classification" desc="Using transfer learning, we extracted features from images and applied diverse classification models to categorize them into 25 distinct malware families." link="https://github.com/rajanptl-9/FYP_Malware_Detection" />
                    <ProjectCard img={notes} title="Let-Note" desc="I've developed a web app enabling users to create accounts, log in securely, manage private notes exclusively visible to them, and perform CRUD operations on these notes." link="https://github.com/rajanptl-9/Let-Note-Frontend" />
                    <ProjectCard img={movies} title="Movie Recommendation" desc="Using machine learning, the project suggests related movies upon user search, displayed through a TKinter GUI, leveraging natural language processing." link="https://github.com/rajanptl-9/Movie_Recommendation_System" />
                </div>
            </div>
        </div>
    )
}

export default Projects