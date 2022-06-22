import React from "react";
import { Link } from "react-router-dom";
//importing react icons
import { HiOutlineMenuAlt1, HiOutlineClipboardList } from "react-icons/hi";
import { BsSearch, BsCalendarWeek, BsEnvelope, BsBell } from "react-icons/bs";
import { GiSurroundedEye, GiAbstract091 } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

//importing img
import profile from "./images/profile8.jpeg";

//importing styles
import "./styles/Nav.css";

const Nav = () => {
  //code for onclick background color change
  
  // const [isActive, setIsActive] = useState(false);
  // const isClicked = () => {
  //     setIsActive(current => !current)
  // }
  return (
    <div className="navcontainer">
      <div className="topnav">
        <div className="managecontainer">
          <GiSurroundedEye color="blue" size={23} />
          <h3>Manage.</h3>
        </div>
        <div className="icons">
          <div className="icon1">
            <HiOutlineMenuAlt1 color="rgb(127, 145, 168)" size={27} />
          </div>
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
        <Link to="/" className="screencontainer">
          <div style={{ marginLeft: "0.5rem" }}>
            <FaHome color="dodgerblue" size={25} />
          </div>
          <p className="screen">Dashboard</p>
        </Link>

        <Link to="/project" className="screencontainer">
          <div style={{ marginLeft: "0.3rem" }}>
            <HiOutlineClipboardList color="dodgerblue" size={25} />
          </div>
          <p className="screen">Project</p>
        </Link>

        <Link to="/events" className="screencontainer">
          <div style={{ marginLeft: "0.5rem" }}>
            <BsCalendarWeek color="dodgerblue" size={25} />
          </div>
          <p className="screen">Events</p>
        </Link>

        <Link to="/activities" className="screencontainer">
          <div style={{ marginLeft: "0.5rem" }}>
            <GiAbstract091 color="dodgerblue" size={25} />
          </div>
          <p className="screen">Activities</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
