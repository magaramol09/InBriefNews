import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios';
import Spinner from './Spinner';
// import Loading from './Loading';

export default function NewsMain(Props) {
    // const [post, setPost] = useState(null)
    const[newsdata , setNewsdata]=useState([]);
    const [spinner , setSpinner]=useState(false);

        const newsAPI =  () => {
        
        const url = {
            method: 'GET',
            url: `https://free-news.p.rapidapi.com/v1/search?q=${Props.content}&lang=en&page=${Props.pageNo}`,
         
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': 'c131741961msh761a938ee1b5385p125204jsnae2b04ae1a54'
            }
            };
            setSpinner(true);
            axios.request(url).then((response) =>
            setNewsdata(response.data.articles)).catch((error) => { console.log(error) });
            setSpinner(false)
        }    
  
        useEffect(() => {
            setSpinner(false)
            newsAPI();
        },[]);

        return ( <>
       <div className="container my-3" >
       {spinner && <Spinner/> }
            <div className="row">
                {newsdata.map((element) => {
                    return <div className="col-md-4" key={element._id}><NewsCard img={element.media} batch={element.topic} title={element.title.slice(0,70)} discription={element.summary.slice(0,403)} url={element.link} /> </div>
                })}
            </div>
        </div>
    </>
    )
}
