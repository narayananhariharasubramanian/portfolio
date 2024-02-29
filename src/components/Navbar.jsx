import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react';
import {Link} from 'react-scroll'

const Navbar = ()=>{
    const[nav, setNav] = useState(false);

    function handleClick(){
        setNav(prevNavStat=>!prevNavStat);
    }

    return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        
            <ul className='hidden md:flex'>
                <li><Link to='home' duration={500} smooth>Home </Link></li>
                <li><Link to='about' duration={500} smooth>About </Link></li>
                <li><Link to='skills' duration={500} smooth>Skills </Link></li>
                <li><Link to='work' duration={500} smooth>Work </Link></li>
                <li><Link to='contact' duration={500} smooth>Contact </Link></li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav?<FaBars />:<FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li><Link to='home' duration={500} smooth onClick={handleClick}>Home </Link></li>
                <li><Link to='about' duration={500} smooth onClick={handleClick}>About </Link></li>
                <li><Link to='skills' duration={500} smooth onClick={handleClick}>Skills </Link></li>
                <li><Link to='work' duration={500} smooth onClick={handleClick}>Work </Link></li>
                <li><Link to='contact' duration={500} smooth onClick={handleClick}>Contact </Link></li>
            </ul>

        {/*Social Menu*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#326fa8] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-grey-300' href='https://www.linkedin.com/in/narayanan-h/'>LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#4f575e] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-grey-300' href="https://github.com/narayananhariharasubramanian">GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#338645] hover:ml-[-10px] duration-300'>
                    <Link to="contact" duration={500} smooth>Email </Link><HiOutlineMail size={30} />
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#85287d] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-grey-300' href="https://docs.google.com/document/d/1rrDPVo8IpEevRaIkYbQnmQGxxo6DAjZh/edit?usp=sharing&ouid=108361725737586246012&rtpof=true&sd=true">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
        </div>)
}

export default Navbar
