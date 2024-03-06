import React from 'react';
import { Link, NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className='m-auto mt-20 max-w-[90%] bg-[#F3F3F3] rounded-tr-[50%] rounded-tl-[50%] text-[#1E0734]'>

      <div className='max-w-[60%] text-center m-auto pt-[200px] '>

        <div className='text-center text-[30px] lg:text-[60px]'>
          <h2 className='font-[300] text-[90px]'>w<span className='font-semibold lg:text-[120px]'>E</span> <span className='lg:text-[90px]  font-[200]'>love</span> <span className='font-[400] lg:text-[90px]'>sh<span className='font-[700] lg:text-[90px]'>A</span>re</span></h2>
          <h2 className='font-[300] '> <span className='lg:text-[33.85px] font-normal'>and</span> <span className='font-[400] lg:text-[90px]'>exp<span className='font-semibold text-[90px]'>R</span>ess</span> <span className='lg:text-[64px] font-[400]'>Ar<span className='font-[800] lg:text-[90]'>T</span></span> </h2>
          <h2><span className='lg:text-[33.85px] font-normal'>in its</span> <span className='font-[300] lg:text-[90px]'>aut<span className='font-[800] lg:'>H</span><span className='font-[200]'>enti</span><span className='font-[400]'>city</span></span></h2>
        </div>

        <div className='text-justify m-auto max-w-[80%] text-[1rem] lg:text-[20px]'>
          <p className='mb-4 mt-8'>
            EARTH is the World of Art that Loves, Shares and Expresses Art in its Authenticity. You probably got that much from the heading, but let's paint a picture together shall we?</p>
          <p className='mb-4'>
            Imagine a world where art can be expressed and experienced without limitations, where everyone is given the opportunity to enjoy everything art has to offer and more and an ecosystem where creatives and art lovers can peacefully coexist. Yes! That world. That world is EARTH.</p>
          <p className='mb-4'> We believe the Art World is a place for EVERYONE. That's why we use technology to create a safe and stress-free environment for the artist to sell his work commission free and for buyers to find art pieces that would bring smiles to their faces, warmth to their hearts and stories to their children.</p>
          <p className='mb-4'>And artists who feel like they aren't seen? We help them find their place in the limelight, making sure that they find the right audience…or the right audience finds them, putting them in a space where their art can speak freely and be heard. Any artist can become seen by the world because we put the spotlight on you.</p>
          <p className='mb-20'> So take this giant leap for Art kind by clicking the button below to join our discord community and find your place on EARTH.</p>
        </div>

        <button className='bg-gradient-to-br from-[#EA6EE7] via-[#AB54FD] to-[#7D2AE7] text-white rounded-[30px] p-4 font-semibold mb-8'>
          <Link>
            Join out discord community
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
