import React from 'react';
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () =>{
    return (<div name="contact" className='w-full h-screen bg-[#0a192f] text-[#bac6d1]'>
        <div className='flex flex-col justify-center items-center w-full h-full'> 
            <div className='max-w-[1000px] w-full mt-7'>
                <p className='text-3xl inline pl-2 border-b-4 border-b-[#962f93] sm:text-right ml-3'>
                   Contact
                </p>
                <div className='grid grid-cols-4 mt-2'> 
                    <div className='w-[50px] mt-1 ml-2'>
                        <p><MdLocalPhone /></p>
                    </div>
                    <div className='md:ml-[-220px] ml-[-110px]'>
                        <p>+614800002384</p>
                    </div>
                    <div className='w-[50px] mt-1'>
                        <p><AiOutlineMail /></p>
                    </div>
                    <div className='md:ml-[-220px] ml-[-110px]'>
                        <p>narayanan.h@outlook.com</p>
                    </div>
                </div>
             
            </div>
            <div className='max-w-[500px] w-full mt-3'>
            <form method="POST" action="https://getform.io/f/qaQQk5an" className='grid justify-center'>
                <label className='py-3'>Name</label>
                <input name="name" type="text" className='w-[320px] md:w-[500px] px-2 text-black' placeholder='Enter your name' required></input>

                <label className='py-3'>Email</label>
                <input name="email" type="text" className='w-[320px] md:w-[500px] px-2 text-black' placeholder='Enter your email' required></input>

                <label className='py-3'>Message</label>
                <textarea name="message" type="text" className='w-[320px] md:w-[500px] h-[150px] px-2 text-black'></textarea>

                <button type="submit" className='mt-4 border-2 w-[150px] mx-auto hover:bg-[#962f93]'>Get in touch</button>
            </form>
            </div>
        </div>
    </div>)
}

export default Contact;