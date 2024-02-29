import React from 'react';

const Contact = () =>{
    return (<div name="contact" className='w-full h-screen bg-[#0a192f] text-[#bac6d1]'>
        <div className='flex flex-col justify-center items-center w-full h-full'> 
            <div className='max-w-[1000px] w-full'>
                <p className='text-4xl inline pl-2 border-b-4 border-b-[#962f93] sm:text-right ml-3'>
                   Contact
                </p>
            </div>
            <div className='max-w-[500px] w-full mt-3'>
            <form method="POST" action="https://getform.io/f/qaQQk5an" className='grid justify-center'>
                <label className='py-3'>Name</label>
                <input name="name" type="text" className='w-[320px] md:w-[500px] px-2 text-black'></input>

                <label className='py-3'>Email</label>
                <input name="email" type="text" className='w-[320px] md:w-[500px] px-2 text-black'></input>

                <label className='py-3'>Message</label>
                <textarea name="message" type="text" className='w-[320px] md:w-[500px] h-[150px] px-2 text-black'></textarea>

                <button type="submit" className='mt-4 border-2 w-[150px] mx-auto hover:bg-[#962f93]'>Get in touch</button>
            </form>
            </div>
        </div>
    </div>)
}

export default Contact;