import React, { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom';


export default function Navicons() {
  const [Lang,setLang]=useState('en');

  useEffect(()=>{
    document.documentElement.lang=Lang;
    document.documentElement.dir= Lang === 'en' ? 'ltr' : 'rtl'

  },[Lang])
  return (
    <>
      <Link to="https://www.facebook.com/profile.php?id=61554331319184#" target='_blank'><FaFacebook className='hover:scale-110 ' /></Link>
      <Link to="https://www.youtube.com/channel/UC6SoOT614g7gWSrtYn3eTmw" target='_blank'><FaYoutube  className='hover:scale-110 '/></Link>
      <Link to="https://www.instagram.com/b.laban.eg/" target="_blank"><FaInstagram  className='hover:scale-110 '/></Link>
      <Link to="https://www.linkedin.com/company/b-laban-%D8%A8%D9%80-%D9%84%D8%A8%D9%86" target="_blank"><FaLinkedin  className='hover:scale-110 '/></Link>
      <select onChange={(e)=>setLang(e.target.value)}>
        <option value='en' className="text-[#000000] text-lg">En</option>
        <option value='ar' className="text-[#000000] text-lg">AR</option>
      </select>
      <GoSearch />
    </>
  )
}
