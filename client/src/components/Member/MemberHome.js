import React from  "react";
import '../../MemberHome.css';
import  Header  from './Header';
import  Icon  from './Icon';
import Footer  from './Footer';
import memhome from '../../memhome.jpg';
import Back from '../../Back.png';

function MemberHome() {
    return(
     <div class ="container">
        <div class = "ma">
            <Icon/>
             <Header/>


    < div class="add">
    <img src={memhome}  alt="memhome"  height ="760px" width="1600px"/>
    </div>


    < div class="Back">
       <a href="/home">
      <img src={Back}  alt="Back" width="40px"/> 
      </a>
      </div>

        <div class="boxh">
           
            <a href="/get" class="button"><span>Borrow Books</span></a>
            <a href="#" class="button"><span>Return Books</span></a>
            <a href="/get" class="button"><span>Search Books</span></a>
            <a href="#" class="button"><span>E-Books</span></a>
            <a href="#" class="button"><span>Payments</span></a>
            <a href="#" class="button"><span>Log Out</span></a>

        </div>
     </div><Footer/>
     </div>
  )
}

 export default MemberHome;