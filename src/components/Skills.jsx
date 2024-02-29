import React from 'react';
import html from "../assets/HTML5_Logo_512.png"
import css from "../assets/css.png"
import javascript from "../assets/JavaScript-Logo.png"
import reactlogo from "../assets/React-icon.png"
import nodelogo from "../assets/nodejs.png"
import expresslogo from "../assets/Expressjs.png"

const Skills = () =>{
    return (<div name="skills" className='text-[#bac6d1] bg-[#0a192f] w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full'>
                <p className='text-4xl inline pl-2 border-b-4 border-b-[#962f93] sm:text-right ml-2'>Skills</p>
                <p className='mt-2 text-xl ml-2'>Technologies I have worked on</p>
            </div>
            <div className='max-w-[1000px] w-full mt-3 grid grid-cols-2 sm:grid-cols-3'>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={html} alt='HTML Logo' className='w-20'/>
                    <p className='text-center mt-1'>HTML</p>
                </div>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={css} alt='HTML Logo' className='w-[60px]'/>
                    <p className='text-center mt-1'>CSS</p>
                </div>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={javascript} alt='HTML Logo' className='w-[150px]'/>
                    <p className='text-center mt-1'>Javascript</p>
                </div>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={reactlogo} alt='HTML Logo' className='w-[60px] mt-3'/>
                    <p className='text-center mt-1'>ReactJS</p>
                </div>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={nodelogo} alt='HTML Logo' className='w-[80px] mt-3'/>
                    <p className='text-center mt-1'>NodeJS</p>
                </div>
                <div className='px-2 py-2 mx-auto hover:scale-125 duration-500'>
                    <img src={expresslogo} alt='HTML Logo' className='w-[140px] mt-3'/>
                    <p className='text-center mt-1'>Express</p>
                </div>
            </div>
            
        </div>
    </div>)
}

export default Skills