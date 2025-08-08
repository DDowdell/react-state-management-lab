import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  )

  const handleAddFighter = (newFighter) => {
    if (money >= newFighter.price) {
      setTeam((oldTeam) => [...oldTeam, newFighter]);
      setZombieFighters((oldFighters) => oldFighters.filter(chosenFighter => chosenFighter.id !== newFighter.id));
      setMoney((oldMoney) => oldMoney - newFighter.price);
    } else {
      console.log("Not enough money");
    }
  };

  const calculateTotalStrength = (team) => {
  const { totalStrength } = team.reduce((totals, zombieFighter) => {
    totals.totalStrength += zombieFighter.strength;
    return totals;
  }, { totalStrength: 0 });

  return totalStrength;
};

const totalStrength = calculateTotalStrength(team);

  return (
    <div>
      <h1>Apocalypse Team!</h1>
      <h2>Total Money: ${money}</h2>

      <h4>Zombie Fighter Options:</h4>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.name}></img>
            <h4>Title: {zombieFighter.name}</h4>
            <p>Price: ${zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>


      <h4>Zombie Fighter Team:</h4>
      {team.length === 0 ? (<p>Pick some team members!</p>) : (
        <ul>
          {team.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <img src={zombieFighter.img} alt={zombieFighter.name}></img>
              <h4>Title: {zombieFighter.name}</h4>
              <p>Price: ${zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
            </li>
          ))}
        </ul>
      )}

<h4>Total Strength: {totalStrength}</h4>
    </div>
  );
};




export default App;
