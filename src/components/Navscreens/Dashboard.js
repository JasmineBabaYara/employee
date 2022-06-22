import React from "react";
import { BsPlusLg, BsSearch, BsTrash, BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import profile1 from "../images/profile7.jpeg";
import profile2 from "../images/profile8.jpeg";
import profile3 from "../images/profile3.avif";
import profile4 from "../images/profile4.avif";
import profile5 from "../images/profile5.avif";
import profile6 from "../images/profile8.jpeg";
import profile7 from "../images/profile6.jpeg";

import '../styles/dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashcontainer">
            <p style={{color:'rgb(247, 247, 247)',}}>.</p>
            <h1>Employee</h1>
            <p className="listtxt">Lists</p>
            <div className="btncontainer">
            <button className="button">
                <BsPlusLg color="white" />
                <p className="add">Add New</p> 
                 </button></div>
                 <div className="secondcontainer">
                 <p style={{color:'rgb(247, 247, 247)',}}>.</p>

                 <div className="search">
            <BsSearch color="rgb(127, 145, 168)" size={18} />
            <input placeholder="Search....." className="searchinput" />
            </div>
                 <div className="content">
                 <div className="info">
                     <p className="id">ID</p>
                     <p className="name">Name</p>
                     <p className="role">Role</p>
                     <p className="phone">Phone</p>
                     <p className="jdate">Join Date</p>
                 </div></div>

                 <div>
                     <div className="contact1">
                         <p className="num">LA-4241</p>
                         <div className="namediv">
                             <img src={profile1} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Keith Morgan</p>
                         <p className="nametxt">bins.joanny@murray.info</p></div>
                         </div>
                         <p className="web">Web Designer</p>
                         <p className="number">711-487-1057</p>
                         <p className="date">30 Nov 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>

                     <div className="contact1">
                         <p className="num">LA-2134</p>
                         <div className="namediv">
                             <img src={profile2} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Ophelia Gilbert</p>
                         <p className="nametxt">dudly.tromp@yahoo.com</p></div>
                         </div>
                         <p className="web">UX Designer</p>
                         <p className="number">259-825-5860</p>
                         <p className="date">29 Sep 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>


                     <div className="contact1">
                         <p className="num">LA-2134</p>
                         <div className="namediv">
                             <img src={profile3} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Isabel Hudson</p>
                         <p className="nametxt">regan.johns@yahoo.com</p></div>
                         </div>
                         <p className="web">UI Designer</p>
                         <p className="number">275-461-5003</p>
                         <p className="date">28 Mar 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>

                     <div className="contact1">
                         <p className="num">LA-2134</p>
                         <div className="namediv">
                             <img src={profile4} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Warren Mullins</p>
                         <p className="nametxt">sibse.nonny@yahoo.info</p></div>
                         </div>
                         <p className="web">Web Designer</p>
                         <p className="number">711-487-1057</p>
                         <p className="date">30 Nov 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>

                     <div className="contact1">
                         <p className="num">LA-2134</p>
                         <div className="namediv">
                             <img src={profile5} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Lena Nguyen</p>
                         <p className="nametxt">thres_tilman@wilden.biz</p></div>
                         </div>
                         <p className="web">Web Developer</p>
                         <p className="number">358-268-7190</p>
                         <p className="date">29 Nov 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>

                     <div className="contact1">
                         <p className="num">LA-2134</p>
                         <div className="namediv">
                             <img src={profile6} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Alberta Hayes </p>
                         <p className="nametxt">saer_walae@yahoo.com</p></div>
                         </div>
                         <p className="web">IOS Developer</p>
                         <p className="number">698-525-7520</p>
                         <p className="date">13 Jun 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>
                     
                     <div className="contact1">
                         <p className="num">LA-4241</p>
                         <div className="namediv">
                             <img src={profile7} height={40} width={40} style={{borderRadius:20}} />
                             <div>
                         <p>Harold Stokes</p>
                         <p className="nametxt">zoey.waker@yahoo.com</p></div>
                         </div>
                         <p className="web">Andid Developer</p>
                         <p className="number">742-269-0585</p>
                         <p className="date">16 Nov 2019</p>
                         <div className="icon">
                             <div className="icon1">
                                 <div>
                             <FiEdit2 color="gold" size={18}/></div>
                             <BsTrash color="red" size={18} /></div>
                             <BsThreeDotsVertical color="grey" size={20} />
                         </div>
                     </div>

                 </div></div>
        </div>
    )
}

export default Dashboard;