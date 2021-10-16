import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List';
import axios from 'axios';

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(()=> {
        const getRandomLists = async () => {
            try{
                const res = await axios.get(
                  `lists${type ? "?type=" + type : ""}${genre ? "&genre="+ genre : ""}`, 
                  {
                      headers: {
                      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY0NGJmOWY4YjRkOTE5NDMyZTc5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4NDA0NywiZXhwIjoxNjM0NzE2MDQ3fQ.uQ5jLlp7YEklf8jReRYWeiH7m4sVWU2Z7m6IRElJ-bI"
                        },
                }
                    );
                    //console.log(res);
                  setLists(res.data);  
                 //console.log(res.data); 
            }catch(err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
           <Navbar />
            <Featured type={type} setGenre={setGenre}/>
           { lists.map((list) => (
                //console.log(list)
                <List list={list}/>
           ))} 
           
        </div>
    )
}

export default Home
