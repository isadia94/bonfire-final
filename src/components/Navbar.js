import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
    return (
       
            <div className="container">
                 <nav>
                 <div className="logo"><h2>BONFIRE</h2></div>
            <ul className="menu">
                <li>HOME</li>
                <li>INTERNATIONAL TOURS</li>
                <li>DOMESTIC TOURS</li>
                <li>HOTELS</li>
                <li>CAR HIRE</li>
                <li>CONTACT</li>
            </ul>
            <div className="menu-icon">
            <MenuIcon style={{fontSize:30}}/>
            </div>
            
           
                 </nav>

                 </div>
           
            
     
    )
}
