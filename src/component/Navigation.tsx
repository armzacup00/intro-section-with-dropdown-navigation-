import logo from '../assets/logo.svg'
import TodoList from '../assets/icon-todo.svg'
import Calendar from '../assets/icon-calendar.svg'
import Reminders from '../assets/icon-reminders.svg'
import Planing from '../assets/icon-planning.svg'
import arrownDown from '../assets/icon-arrow-down.svg'
import arrownUp from '../assets/icon-arrow-up.svg'
import crossing from '../assets/icon-close-menu.svg'
import hamburger from '../assets/icon-menu.svg'
import { useState } from 'react'

export default function Navigation(props:any){
    const {mainNav,onNoffMainNav,setMainNav} = props

    const [companyDropdown , setCompanyDropdown] = useState(false)
    const onNoffCD =()=> setCompanyDropdown(!companyDropdown)

    const [featuresDropdown , setFeaturesDropdown] = useState(false)
    const onNoffFD =()=>setFeaturesDropdown(!featuresDropdown)
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <button onClick={onNoffMainNav} className={mainNav? 'mainnav-button-off':'mainnav-button-on'}>
                <img src={hamburger} alt="menu" />
            </button>
            <ul className={ mainNav ? 'main-nav-on' : 'main-nav-off'}>
                <button className='crossing-button' onClick={()=>setMainNav(false)}><img src={crossing} alt="crossing"/></button>
                <li><a href='#' onClick={onNoffFD}>Features <img src={featuresDropdown? arrownDown : arrownUp } alt="arrown" /></a></li>
                    <ul className={featuresDropdown ? 'features-off' : 'features-on'}>
                        <li><img src={TodoList} alt="TodoList" /> <span>Todo List</span></li>
                        <li><img src={Calendar} alt="Calendar" /> <span>Calendar</span></li>
                        <li><img src={Reminders} alt="Reminders" /> <span>Reminders</span></li>
                        <li><img src={Planing} alt="Planing" /> <span>Planing</span></li>
                    </ul>
                    
                <li><a href="#" onClick={onNoffCD}>Company <img src={companyDropdown? arrownDown :  arrownUp } alt="arrown" /></a></li>
                    <ul className={companyDropdown ? 'company-off' : 'company-on'}>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>

                <li><a href="#">Careers</a></li>
                <li><a href="#">About</a></li>
                <div className='sign-button'>
                    <a href='#'>Login</a>
                    <button className='register-button'>Register</button>
                </div>
            </ul>
        </nav>
    )
}