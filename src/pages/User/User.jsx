import React, { useEffect, useState } from 'react'
import './User.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ0M2M5ZGMyZWYwYjlkNWFiOGU1ODU0MmNlMzlhNCIsIm5iZiI6MTc1MTY0MDUwOC41MTQsInN1YiI6IjY4NjdlOWJjZGExOTMzYThmZjFiMjU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DLD_lM94Nil1VzCyW0q7YDILQBgF9N-OhIyxRzz3uKI'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='user'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default User
