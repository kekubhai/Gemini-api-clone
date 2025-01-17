/* import  { } from '../..//'
import './Main.css'
import { assets } from '../../assets/assets'
import React,{ use } from 'react'
const Main = () => {
const{onSent,recentPrompt,showResult,resultData,setInput,input}=use()
return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className='main-container'>

    {!showResult? <>
        <div className='greet'>
                <p><span>Hello,Dev.</span></p>
                <p>How Can i help You Today?</p>
            </div>
            <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to visit on a roadtrip</p>
            <img src={assets.compass_icon}/>
        </div>
        <div className='card'>
            <p>Briefly summarise the planning of urban planning</p>
            <img src={assets.bulb_icon}/>
        </div>
        <div className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon}/>
        </div>
        <div className='card'>
            <p>Improve the readabilit of the following code</p>
            <img src={assets.code_icon} alt=''/>
        </div>
            </div>

    </>
    :<div className='result'>
        <dev className='result-title' >
            <img src={assets.user_icon} alt='' />
            <p>{recentPrompt}</p>
        </dev>
        <div className="result-data">
            <img src={assets.gemini_icon}  />
            {loading 
            ?<div className='loader'  ></div>:
            <p  dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
        </div>
        </div>
        }
    <div className='result'>
        <div className='result-title'></div>
        <div/>
        <div/>
    <div className='greet'>
                <p><span>Hello,Dev.</span></p>
                <p>How Can i help You Today?</p>
            </div>
            <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to visit on a roadtrip</p>
            <img src={assets.compass_icon}/>
        </div>
        <div className='card'>
            <p>Briefly summarise the planning of urban planning</p>
            <img src={assets.bulb_icon}/>
        </div>
        <div className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon}/>
        </div>
        <div className='card'>
            <p>Improve the readabilit of the following code</p>
            <img src={assets.code_icon} alt=''/>
        </div>
            </div>
            <div/>

        <div className="main-bottom">
            <div className="search-box">
                <input onClick={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'  />

           <div>
           <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>onSent()}src= {assets.send_icon} alt="" />
           </div>
        </div>
        <p className='bottom-info'>
            hey ,there sexy baby honey, are you having an hard on
        </p>
        </div>
    </div>
    </div>
    </div>
  
  
    )}


export default Main

*/