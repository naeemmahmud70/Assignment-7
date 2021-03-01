
import { useEffect, useState } from 'react';
import './App.css';
import Count from './components/count/Count';
import Players from './components/Players/Players';
import playersData from './playersData/data.json';

function App() {
  const [players, setPlayers] = useState([])
  const [count, setCount] = useState([])
  useEffect(() => {
    setPlayers(playersData)
  }, [])

  const handleButton = (player) => {
    const newCount = [...count, player]
    setCount(newCount)
  }

  return (
    <div>
    <div className="divFlex">
      <div>
        {
          players.map(player => <Players player={player} handleButton={handleButton}></Players>)
        }
      </div>
      <div>
        <Count count={count}></Count>
      </div>
    </div>
    </div>
  );
}

export default App;
