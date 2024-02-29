import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Workmodal from './Workmodal';
var workDesc = "";
var company = "";

const Work = () =>{

    const[show,setShow] = useState(false);
    
    
    function handleClick(comp){
        company = comp;
        switch (comp){
        case 'Wipro':
            workDesc = 'Worked as a software engineer for one of the biggest tire retailers of the US. This role includes developing custom enhancements for the retail application for the retailer. The system was built on the AS400 using RPGLE and CLLE languages.'
            //onsole.log(workDesc)
            setShow(true)
            break;
        case 'Bally':
            workDesc = 'Worked as a Senior Software Analyst for the L2 Support Team. Handled critical production artifacts for the advanced Casino Management System. This system was developed on the AS400 and the languages used were RPGLE and CLLE.'
            //console.log(workDesc)
            setShow(true)
            break;
        case 'NTT':
            workDesc = 'Worked as a Principal Consultant and also as a Business Analyst for one of the worlds largest fork lift manufacturer. Was based out the manufacturing locations in the United States and the United Kingdom. Working closely with the business teams to develop and enhance the shop floor application. This application used the DFT technique to simplify the customer truck building process. The system was built on LANSA and AS400.'
            //console.log(workDesc)
            setShow(true)
            break;
        default:
            workDesc = 'Worked as a Full stack developer for the CLS (Commercial Lending System) suite of applications. This is a huge application that ' +
            'handles the commercial lending business for some of the worlds largest banks. This system was originally developed on ' +  
            'LANSA and AS400. Was part of the team that started migrating the application from LANSA/AS400 to the Web. The technologies used were ' +
            'ReactJS, HTML, CSS, Javascript, NodeJS and Express.'
            //console.log(workDesc)
            setShow(true)
        }
       
    }

    function modalClose(){
        setShow(false)
    }



    return(
    <div name="work" className='w-full h-screen bg-[#0a192f] text-[#bac6d1]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full'>
                 <p className='text-4xl inline pl-2 border-b-4 border-b-[#962f93] sm:text-right ml-2'>Work Experience</p>
                <p className='mt-2 text-xl ml-2'>Check out my work experience. Click to know more.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 mt-2'>
                    <div className='mx-4 text-xl py-2 cursor-pointer' onClick={()=>handleClick('Wipro')}>
                        Wipro Technologies
                    </div>
                    <div className='mx-4 text-xl py-2' onClick={()=>handleClick('Bally')}>
                        Bally Technologies
                    </div>
                    <div className='mx-4 text-xl py-2' onClick={()=>handleClick('NTT')}>
                        NTT Data   
                    </div>
                    <div className='mx-4 text-xl py-2' onClick={()=>handleClick('FIS')}>
                        FIS
                    </div>
                    
                   <Workmodal isOpen={show} onClose={modalClose} comp={company}>{workDesc} </Workmodal>
                        
                </div>
               
            </div>
        </div>
      
    </div>)
}

export default Work;