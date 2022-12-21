import React from 'react';
import tech from '../../assets/techdemy1.png';
import space from '../../assets/space.png';
import stylehub from '../../assets/stylehub.png';
const Projects = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-sky-700 mb-10 '> My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                <div className="">
                    <figure><img src={tech} alt="Album" /></figure>
                </div>
                <div className="">
                    <figure><img src={space} alt="Album" /></figure>
                </div>
                <div className="">
                    <figure><img src={stylehub} alt="Album" /></figure>
                </div>
            </div>

        </div>
    );
};
export default Projects;