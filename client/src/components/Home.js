import React from  "react";
import '../Home.css';
import Logo from '../Logo.png';

function Home() {
    return(
    <>
     <div class = "pg"> < div class="logo">
      <img src={Logo}  alt="logo" width="200px"/>
      </div>
      
       
        <div class="box2">
            <a href="#" class="button"><span>Books Management</span></a>
            <a href="#" class="button"><span>Transaction Management</span></a>
            <a href="/admin" class="button"><span>Membership Management</span></a>
            <a href="#" class="button"><span>Payment Management</span></a>
        </div>
     </div>
    </>
  )
}

export default Home;