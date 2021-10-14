import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react'
import './featured.scss';

export default function Featured({type}) {
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
            <img src="https://img3.goodfon.com/wallpaper/nbig/3/21/amerikanskiy-psihopat-5728.jpg" alt="" />
            <div className="info">
                <img src="https://fanart.tv/fanart/movies/1359/movielogo/american-psycho-5030bf7d590df.png " alt="" />
                
                <span className="desc">
                In New York City in 1987, a handsome, young urban professional, Patrick Bateman 
                , lives a second life as a gruesome serial killer by night. 
                This is a biting, wry comedy examining the elements that make a man a monster.
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
