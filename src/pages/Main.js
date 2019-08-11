import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    const repeat = [1, 2, 3, 4];
    return (
        <div className="main-container">
            <img src={logo} alt="Tinder"/>

            <ul>
                {repeat.map(v => (
                    <li key={v}>
                        <img
                            src="https://avatars0.githubusercontent.com/u/52754546?v=4" 
                            alt="User img"/>
                        
                        <footer>
                            <strong>Vitor Emidio</strong>
                            <p>Programador TCE-RJ DTI</p>
                        </footer>

                        <div className="buttons">
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}