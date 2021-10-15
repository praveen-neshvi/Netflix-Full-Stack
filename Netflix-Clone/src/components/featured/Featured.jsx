import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './featured.scss';

export default function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(()=> {
        const getRandomContent = async()=>{
            try{
                const res = await axios.get(`/movies/random?type=${type}`,{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY0NGJmOWY4YjRkOTE5NDMyZTc5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NDA0NywiZXhwIjoxNjM0NzE2MDQ3fQ.uQ5jLlp7YEklf8jReRYWeiH7m4sVWU2Z7m6IRElJ-bI"
                          },
                })
                setContent(res.data[0]);
            } catch(err) {
                console.log(err)
            }
        }
        getRandomContent();
    },[type])
    console.log(content);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                
                <span className="desc">
                {content.desc}
                 </span>

                <div className="buttons">
                    <div className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </div>
                    <div className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
