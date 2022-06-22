import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsSearch, BsCalendarWeek, BsEnvelope, BsBell  } from "react-icons/bs";
import { GiSurroundedEye } from "react-icons/gi";
import { AiOutlineMessage } from"react-icons/ai";
import { FaHome } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GiAbstract091 } from "react-icons/gi";
import profile from "./images/profile8.jpeg";
import './styles/Nav.css';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const isClicked = () => {
        setIsActive(current => !current)
    }
    return (
        <div className="navcontainer">
            <div className="topnav">
            <div className="managecontainer">
                <GiSurroundedEye color="blue" size={23} />
                <h3>Manage.</h3>
            </div>
            <div className="icons">
                <div className="icon1">
            <HiOutlineMenuAlt1 color="rgb(127, 145, 168)" size={27} /></div>
            <div>
            <BsSearch color="rgb(127, 145, 168)" size={22} />
            </div>
            </div>
            <input placeholder="Search....." className="searchinput" />

            <div className="icons2">
            <BsCalendarWeek color="rgb(127, 145, 168)" size={25} />

            <AiOutlineMessage color="rgb(127, 145, 168)" size={25} />

            <BsEnvelope color="rgb(127, 145, 168)" size={25} />

            <BsBell color="rgb(127, 145, 168)" size={25} />

            <img src={profile} alt="hi" height={43} width={48} className="img" />
            </div>
</div>

        <div className="navscreens">
            <button className="screencontainer" >
                <FaHome color="dodgerblue" size={25} />
                <Link to='/' className="screen" >Dashboard</Link>
            </button>
            <button className="screencontainer">
                <HiOutlineClipboardList color="dodgerblue" size={25} />
                <Link to='/project' className="screen">Project</Link>
            </button>
            <button className="screencontainer">
            <BsCalendarWeek color="dodgerblue" size={25} />
                <Link to='/events' className="screen">Events</Link>
            </button>
            <button className="screencontainer">
                <GiAbstract091 color="dodgerblue" size={25} />
                <Link to='/activities' className="screen">Activities</Link>
            </button>
        </div>
        </div>
    )
}

export default Nav;