import React, {useState} from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        console.log(username);

        const response = await api.get('/user', {
          headers: {
            user: username,
          }
        });
      
        const { _id, admin } = response.data;

        console.log(_id);        

        console.log(admin);

        if(admin){
            history.push(`/admin/${_id}`);
        }else{
            // redireciona
            history.push(`/user/${_id}`);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt='WhereLunch'/>
                <input 
                    placeholder="Digite seu usuário"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>            
        </div>        
    );
}