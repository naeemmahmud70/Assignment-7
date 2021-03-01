
import { useEffect, useState } from 'react';
import './App.css';
import Count from './components/count/Count';
import Players from './components/Players/Players';
import playersData from './playersData/data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';

function App() {
  const [players, setPlayers] = useState([])
  const [count, setCount] = useState([])
  useEffect(() => {
    setPlayers(playersData)
  }, [])

  const handleHireButton = (player) => {
    const newCount = [...count, player]
    setCount(newCount)
  }

  return (
    <div className="container shadow">
      <Header></Header>
    <div className="divFlex row">
      <div className="col-md-8">
        {
          players.map(player => <Players player={player} key={player.id} handleHireButton={handleHireButton}></Players>)
        }
      </div>
      <div className="col-md-4 mt-4">
        <Count count={count}></Count>
      </div>
    </div>
    </div>
  );
}

export default App;
