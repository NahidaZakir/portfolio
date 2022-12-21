
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Projects from '../Projects/Projects';

const Home = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <div className=' py-20 px-5 text-center flex justify-center items-center flex-col'>
                <h1 className='text-5xl font-bold text-sky-700'>NAHIDA ZAKIR</h1>
                <h2 className='text-5xl font-bold text-sky-700'>WEB DEVELOPER</h2>
                <div className='bg-sky-700 rounded w-1/6 mt-5'>
                    <a href="https://drive.google.com/file/d/1pY15ClC-PhkkM0vg6B_ShLvgCEuWIWOc/view?usp=sharing" target="_blank"><button className='bg-sky-700 rounded btn glass w-full'>Resume</button></a>
                </div >
            </div >
            <Projects></Projects>
        </div >
    );
};
export default Home;