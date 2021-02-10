
import * as FaIcon from 'react-icons/fa';
import * as GrIcon from 'react-icons/gr';
import * as FcIcon from 'react-icons/fc';
import { Link } from 'react-router-dom';

import './NavBar.css'
import {useState} from 'react'


function Navbar() {

  let [menu,setMenu]=useState(false)
  return (
    <div className="App">


      <div className="navbar">
      <Link to='#' className="navbar-icon">
        <FaIcon.FaBars  onClick={()=>setMenu(!menu)}/>


      </Link>
        <span className="navbar-brand">E-Com App</span>
      


      </div>
      
      <nav className={menu ? "nav-menu  active" :"nav-menu"}>

        <ul className='nav-items' onClick={()=>setMenu(!menu)}>

          <li >
          <Link >
          <GrIcon.GrClose className="close-icon" />
          </Link>
          </li>

          <li>
           
          <Link to={'/man'}>
          <span></span>
          <FcIcon.FcBusinessman className="item-icon"/>
         
          <span>Man</span>
          </Link>

          </li>
          <li>
          <Link to={'/woman'}>
          <FcIcon.FcBusinesswoman className="item-icon"/>
         
          
          <span>Woman</span>
          </Link>
          </li>




        </ul>



      </nav>

      



    </div>
  );
}

export default Navbar;
