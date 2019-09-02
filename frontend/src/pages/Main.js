import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

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
  
    async function handlePoll(id) {
      await api.post(`/restaurants/${id}/polls`, null, {
        headers: { user: match.params.id },
      });
  
      setRestaurants(restaurants.filter(user => user._id !== id));

      // redireciona
      history.push(`/pollok`);
    }
  
    return (
      <div className="main-container">
        <Link to="/">
          <img src={logo} alt="WhereLunch" />
        </Link>
        {/* <strong>Where are we going to have lunch today?</strong> */}
        {restaurants.length > 0 ? (
          <ul>
            {restaurants.map(restaurant => (
              <li key={restaurant._id}>
                {/* <img src={restaurant.name} alt="" /> */}
                <footer>
                  <strong>{restaurant.name}</strong>
                  <p>{restaurant.site}</p>
                </footer>
  
                <div className="buttons">
  
                  <button type="button" onClick={() => handlePoll(restaurant._id)}>
                    <img src={vote} alt="Vote" />
                  </button>
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