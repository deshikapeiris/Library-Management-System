import React from "react";
import '../../Header.css';
import Logo from '../../Logo.png';

function Header(){

    return(
<div class ="container">
      < div class="logo">
      <img src={Logo}  alt="logo" width="200px"/>
      </div>
      
      <ul>
        
      <li><a class="active" href="/member">Home</a></li>
      <li><a href="/recommend" >Recommendation Books</a></li>
      <li><a href="#Available Bookst">Available Books</a></li>
      <li><a href="#Authors">Authors</a></li>
      <li><a href="/Borrowed">Report</a></li>
    </ul>
    </div>
    
)
}

export default Header;