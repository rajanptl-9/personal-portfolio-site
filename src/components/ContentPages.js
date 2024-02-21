import React from 'react'
import "../App.css"
import Profile from './profile/Profile'
import { useMyContext } from './ContextVar';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';

function ContentPages() {
    const { menuSelected } = useMyContext();
    return (
        <>
            {menuSelected === "home" ? <Profile /> :
                <div className='main_subcontainer'>
                    {menuSelected === "about" && <About />}
                    {menuSelected === "projects" && <Projects />}
                    {menuSelected === "contact" && <Contact />}
                </div>}
        </>
    )
}

export default ContentPages