import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Admin.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

import vote from '../assets/vote.svg';

export default function Main({ match, history }) {
    const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      async function loadRestaurants() {
        const response = await api.get('/restaurants', {
          headers: {
            user: match.params.id,
          }
        })
  
        setRestaurants(response.data);
      }
  
      loadRestaurants();
    }, [match.params.id]);
  
    async function clearVotes(id) {
        await api.post(`/restaurants/prepare`, null, {
          headers: { user: match.params.id },
        });
    
        // redireciona
        history.push(`/pollok`);
      }
  
    return (
      <div className="main-container">

        <Link to="/">
          <img src={logo} alt="WhereLunch" />
        </Link>
        {/* <strong>Where are we going to have lunch today?</strong> */}
        <div className="buttons">
            <footer>
                <button type="button" onClick={() => { 
                  if (window.confirm('are you sure you want to start voting?')) clearVotes()}}>
                    {/* <img src={vote} alt="Vote" /> */}
                    <strong>Clear Votes</strong>
               </button>
               
            </footer>
        </div>
        {restaurants.length > 0 ? (
          <ul>
            {restaurants.map(restaurant => (
              <li key={restaurant._id}>
                {/* <img src={restaurant.name} alt="" /> */}
                <footer>
                  <strong>{restaurant.name}</strong>
                  <p>{restaurant.site}</p>
                </footer>
                <div className="fotters">
  
                  <footer>
                    <img src={vote} alt="Vote" />
                    <strong>       {restaurant.polls.length}</strong>
                  </footer>
                </div>
              </li>
            ))}
          </ul>
        ) : (
            <div className="empty">end :(</div>
          )}
      </div>
    )
  }