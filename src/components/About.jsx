import React from 'react';

const About = () => {
    return(<div name="about" className='w-full h-screen bg-[#0a192f] text-[#bac6d1]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <span><p className='text-4xl inline pl-2 border-b-4 border-b-[#962f93] sm:text-right ml-3'>About</p></span>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div><p className='text-2xl font-bold pl-2 mt-2 ml-3'>I am Narayanan. This page showcases my work. Have a look around. </p></div>
                <div>
                    <p className='ml-3 mr-1'>
                    I am passionate about building excellent software with focus on adding value to clients. I have variety of experience in multiple domains ranging from Retail to Banking. 
                    </p>
                </div>
            </div>
        </div>
    </div>)
}

export default About;