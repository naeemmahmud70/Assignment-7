import React from 'react';

const Count = (props) => {
    const count = props.count

    const totalBudget = count.reduce((sum, player) => sum + player.salary, 0)

    return (
        <div className="shadow p-3">
            <h2>Total hired:{count.length}</h2>
            <ol>
            {
                count.map(name=> <li>Name: {name.name}. Salary: {name.salary}</li>)
            }
            </ol>
            <h3>Team Budget:{totalBudget}</h3>
        </div>
    );
};

export default Count;