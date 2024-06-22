import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <h4>Developed by KRISHNA. D</h4>
      <h4>Copyright &copy; 2021 K.D</h4>
      <div className='footerLinks'>
        <a href="https://github.com/jeevan8888" target='_blank'><FaGithub/></a>
        <a href="https://de.linkedin.com/in/krishna-desai2418?trk=public_profile_browsemap" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:rbgrobertclark032@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://t.me/acient0823" target="_blank"><FaTelegram/></a>
      </div>
    </footer>
  )
}

export default Footer