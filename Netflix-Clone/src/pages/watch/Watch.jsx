import { ArrowBackIosOutlined } from '@material-ui/icons'
import Video from "./vid.mp4";
import React from 'react'
import './watch.scss'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Watch() {
    const location = useLocation();
    const movie = location.movie;
    return (
        <div className="watch">
        <Link to="/">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
        </Link>  
            <video className="Video" 
                autoPlay 
                progress 
                controls 
                src={movie.video}
            />
          
        </div>
    )
}
