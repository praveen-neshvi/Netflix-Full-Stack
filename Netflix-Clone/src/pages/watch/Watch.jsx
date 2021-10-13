import { ArrowBackIosOutlined } from '@material-ui/icons'
import Video from "./vid.mp4";
import React from 'react'
import './watch.scss'

export default function watch() {
    return (
        <div className="watch">

            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>

            <video className="Video" 
                autoPlay 
                progress 
                controls 
                src={Video}
            />
            
        </div>
    )
}
