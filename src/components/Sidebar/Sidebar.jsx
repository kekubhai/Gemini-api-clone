/*
import './Sidebar.css'
import {assets} from '../../assets/assets'
import React,{ useContext, useState } from 'react'
import {Context} from '../../context/Context'

const Sidebar = () => {
  const[extended , setExtended]=useState(false)
  const {onSent,prevPrompts,setRecentprompt}=useContext(Context)
  return (
    
    <div className='sidebar'>
    <div className='top'>
    <img onClick={()=>setExtended(prev=>!prev)} className='menu'src= {assets.menu_icon} alt=''/>
    <div className='new-chat'>
      <img src= {assets.plus_icon} alt='here'/>
      {extended?<p>New Chat</p>:null}
    </div>
{extended?
    <div className='recent'>
      <p className='recenet-title'>Recent</p>
      {prevPrompts.map((item)=>{ 
             return(
              <div className="recent entry">
              <img src={assets.message_icon}/>
              <p>What is React</p>
            </div>
             )
      })}
     
    </div>:null}

    </div>

    <div className='bottom'>
      <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {extended?<p>Help</p>:null}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
       {extended? <p>Activity</p>:null}
    </div>
    <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
       {extended? <p>Settings</p>:null}
      
    </div>
    </div>
    </div>

  

)}
export default Sidebar
*/

import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
	return (
		<div className="sidebar">
			<div className="top">
				<img
					src={assets.menu_icon}
					className="menu"
					alt="menu-icon"
					onClick={() => {
						setExtended((prev) => !prev);
					}}
				/>
				<div className="new-chat">
					<img src={assets.plus_icon} alt="" onClick={()=>{
                        newChat()
                    }} />
					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className="recent">
						<p className="recent-title">Recent</p>
						{prevPrompts.map((item,index) => {
              return( 
                <div onClick={()=>{ 
                 loadPreviousPrompt(item)
                }} className="recent-entry" >
                 <img src={assets.message_icon} />
                 <p>{DataTransferItemList.slice(0,18)}...</p>
                </div>
           );
						
						})}
					</div>
				) : null}
			</div>
			<div className="bottom">
				<div className="bottom-item recent-entry">
					<img src={assets.question_icon} alt="" />
					{extended ? <p>Help</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.history_icon} alt="" />
					{extended ? <p>Activity</p> : null}
				</div>
				<div className="bottom-item recent-entry">
					<img src={assets.setting_icon} alt="" />
					{extended ? <p>Settings</p> : null}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;