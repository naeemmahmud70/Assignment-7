import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Players.css'



const Players = (props) => {
    const { image, name, salary } = props.player
    const handleHireButton = props.handleButton
    return (
        <div className="playerDiv">
            <div id="imageStyle">
                <img src={image} alt="" />
            </div>
            <div className="detailsDiv">
                <h2>Name: {name}</h2>
                <h4>Salary: {salary}</h4>
                <button onClick={() => handleHireButton(props.player)}> <FontAwesomeIcon icon={faShoppingCart  } />Click to Hire</button>
            </div>

        </div>
    );
};

export default Players;