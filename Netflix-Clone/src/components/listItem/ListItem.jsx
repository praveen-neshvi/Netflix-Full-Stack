import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Video from "./vid.mp4";
import './listitem.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ListItem({index, item}) {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
 
    useEffect( ()=> {
        const getMovie = async () => {
            try{
                const res = await axios.get("/movies/find/"+item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY0NGJmOWY4YjRkOTE5NDMyZTc5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NDA0NywiZXhwIjoxNjM0NzE2MDQ3fQ.uQ5jLlp7YEklf8jReRYWeiH7m4sVWU2Z7m6IRElJ-bI"
                          },
                });
                setMovie(res.data);
            }catch(err){
                console.log(err)
            }
        };
        getMovie()
    },[item]);
    return (
        <Link to={{pathname : "/watch", movie: movie}}>
        <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}>
            <img src={movie.img}
             alt="" />
            {isHovered && (
            <>
            <video autostart={true} autoPlay={true} src={movie.trailer} type="video/mp4" />
           
        <div className="itemInfo">
            <div className="icons">
               <PlayArrow className="icon"/> 
               <Add className="icon"/>
               <ThumbUpAltOutlined className="icon"/>
               <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span  className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
            </div>
            <div className="desc">
            {movie.desc}
            </div>
            <div className="genre">
                {movie.genre}
            </div>
        </div></>
        )}
        </div>
        </Link>
    )
}
