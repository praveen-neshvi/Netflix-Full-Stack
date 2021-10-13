import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import Video from "./vid.mp4";
import './listitem.scss'


export default function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    //const trailer = "https://www.youtube.com/watch?v=Hyag7lR8CPA";
    // const opts = {
    //     height: '350',
    //     width: '100%' ,
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    //   };
  
    return (
        <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}>
            <img src="https://musicfriendz.files.wordpress.com/2020/01/the-lighthouse-2019-banner.jpg?w=1200"
             alt="" />
            {isHovered && (
            <>
            <video autostart={true} autoPlay={true} src={Video} type="video/mp4" />
           
        <div className="itemInfo">
            <div className="icons">
               <PlayArrow className="icon"/> 
               <Add className="icon"/>
               <ThumbUpAltOutlined className="icon"/>
               <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span  className="limit">16+</span>
                <span>2019</span>
            </div>
            <div className="desc">
            In a remote island, Ephraim Winslow arrives as a lighthouse keeper 
            and assists his elderly supervisor, Thomas Wake. 
            </div>
            <div className="genre">
                Horror/Mystery
            </div>
        </div></>
        )}
        </div>
        
    )
}
