import React from 'react'
import './Navbar.css'
import Menu from '../../assets/menu.png'
import Profile from '../../assets/Profile.png'

import { useNavigate } from 'react-router-dom'





const Navbar = ({setSidebar}) => {

  const navigate = useNavigate();

  
  return (
    <div>
        <div className="navbar">
          <div className="rightside">
             <div className="menu-option">
              <svg
               onClick={()=> setSidebar(prev=>prev===false?true:false)}
               style={{ cursor: 'pointer' }}
               xmlns="http://www.w3.org/2000/svg"
                width="32" height="32" fill="#000000" 
                viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
            </div>
            
            </div>
            <div className="leftside">
                <div className="logo">
                  <img src={Profile}/>
                </div>
                <p>The Coffee Atlas</p>
            </div>

            

        </div>
      
    </div>
  )
}

export default Navbar
