import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "./components/screens/LoginScreen";
import Home from "../src/components/Home";

import AddUser from './components/Member/AddUser';
import Header from './components/Member/Header';
import Footer from './components/Member/Footer';
import UpdateUser from './components/Member/UpdateUser';
import AdminHome from './components/Member/AdminHome';
import MemberHome from './components/Member/MemberHome';
import ViewUser from './components/Member/ViewUser';
import Icon from './components/Member/Icon';
import Recommend from './components/Member/Recommend';
import ViewRecommend from './components/Member/ViewRecommend';
import SearchBook from './components/Member/SearchBook';
import BookReport from './components/Member/BookReport';


function App() {
    return ( 
        <div className = 'App'>
            <Router>
                <Routes>
                    <Route path = '/'element = { < LoginScreen /> } />
                    <Route path="/home"element = { < Home /> } />

                    <Route path="/add"element = { < AddUser/> } />
                    <Route path="/header"element = { < Header/> } />
                    <Route path="/footer"element = { < Footer/> } />
                    <Route path="/update"element = { < UpdateUser/> } />
                    <Route path="/admin"element = { < AdminHome/> } />
                    <Route path="/member"element = { < MemberHome/> } />
                    <Route path="/user"element = { < ViewUser/> } />
                    <Route path="/icon"element = { < Icon/> } />
                    <Route path="/recommend"element = { < Recommend/> } />
                    <Route path="/delete"element = { < ViewRecommend/> } />
                    <Route path="/get"element = { < SearchBook/> } />
                    <Route path="/Borrowed"element = { < BookReport/> } />
                    
                    

                </Routes>  
            </Router>  
        </div>
    )
}

export default App;