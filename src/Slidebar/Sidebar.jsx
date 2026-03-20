import React, { use } from 'react'
import './Sidebar.css'
import home from '../assets/home.png'
import history from '../assets/history.png'
import Toggle from '../assets/dark-theme toggle.png'
import { logout } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({sidebar, theme, setTheme}) => {

  const toggle_mode = () => {
    console.log("Current theme:", theme);
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>

      <div className="shortcut-links">

        
         

         <div className="side-link" onClick={toggle_mode}>

          {theme==='dark' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112ZM80,88a40,40,0,1,0,40,40A40,40,0,0,0,80,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,152Z"></path></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112Zm0-96a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z"></path></svg>
}


          <p>{theme === 'dark' ? 'Dark Mode' : "Light Mode"}</p>

        </div>

        <div className="side-link">

          <svg xmlns="http://www.w3.org/2000/svg" width="32"
           height="32" fill="#000000" viewBox="0 0 256 256">

            <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z">

          </path>

          </svg>

          <p>Favourites</p>
          
        </div>

        <div className="side-link">

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
            
            <p>About Us</p>

          </div>

        <hr/>

        <div className="nav-actions">
              <button onClick={handleLogout} className='logout-btn'>
                Log Out
              </button>
            </div>
            

      </div>
      
      
    </div>
  )
}

export default Sidebar
