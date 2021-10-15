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
                      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWY0NGJmOWY4YjRkOTE5NDMyZTc5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI3NTc4MSwiZXhwIjoxNjM0NzA3NzgxfQ.Vvyyyc_l_wavhGduBgqKLmfqsoJnzAcbYAY79iwJkwU"
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
            <Featured type={type}/>
           { lists.map((list) => (
                //console.log(list)
                <List list={list}/>
           ))} 
           
        </div>
    )
}

export default Home
