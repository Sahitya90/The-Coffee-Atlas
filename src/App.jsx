import React, { useState, useEffect } from 'react' // <--- 1. Import useEffect
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Slidebar/Sidebar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './Components/Footer/Footer'
import  CoffeeData  from './Components/CoffeeData'
import ScrollTop from './Components/ScrollTop'
import Login from './Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'


 



const App = () => {

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
       if(user){
        console.log("Logged In");
       }else{
        console.log("Logged Out");
       }
    })

  }, [])
  const [sidebar, setSidebar] = useState(false);

  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  const location= useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login';
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       if (currentUser) {
         console.log("User Logged In:", currentUser.email);
         setUser(currentUser); // Save user to state
         
         // If they are on the login page, send them Home
         if(location.pathname === '/login') {
            navigate('/');
         }
       } else {
         console.log("User Logged Out");
         setUser(null);
       }
    });

    return () => {
        unsubscribe();
    }
  }, [navigate, location.pathname]);


  
  useEffect(() => {
    const handleScroll = () => {
    
      const threshold = window.innerHeight * 0.7;

      if (window.scrollY > threshold && sidebar === true) {
        setSidebar(false);
      }
    };

  
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebar]); 

  return (
    <>
    <div className={`app-container ${theme}`}>
      <ScrollTop/>

      {!isLoginPage && <Navbar setSidebar={setSidebar} theme={theme} />}
      {!isLoginPage && <Sidebar sidebar ={sidebar} theme={theme} setTheme={setTheme}/>}
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />

        <Route path='/coffee/:coffeeType' element={<CoffeeData/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {!isLoginPage && <Footer/>}
      
    </div>
    
    </>
  )
}

export default App