import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import './Players.css'



const Players = (props) => {
    const { image, name, country, salary } = props.player
    const handleHireButton = props.handleHireButton
    return (
        <div className="playerDiv shadow">
            <div id="imageStyle">
                <img src={image} alt="" />
            </div>
            <div className="detailsDiv">
                <h2>Name: {name}</h2>
                <h4>Country: {country}</h4>
                <h4>Salary: {salary}</h4>
                <button className="btn btn-success" onClick={() => handleHireButton(props.player)}> <FontAwesomeIcon icon={faPlaneDeparture } />Click to Hire</button>
            </div>

        </div>
    );
};

export default Players;