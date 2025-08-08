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
        img: 'https://media.istockphoto.com/id/1209201210/photo/post-apocalyptic-warrior-boy-outdoors-in-desert-wasteland.jpg?s=612x612&w=0&k=20&c=D-Zs7MxMEqtzLi4L5kqz2HvTt0YgxOYHMzwlrwH31f0=',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://media.istockphoto.com/id/1808242371/photo/climber-and-camper-alone-in-nature.jpg?s=612x612&w=0&k=20&c=WBwf9iosP8sZzXfwBmdvbqJvI6cPXSFOiOUt2ShCw_g=',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://media.istockphoto.com/id/1256865882/photo/a-soldier-in-a-gas-mask-military-protective-clothing-and-a-machine-gun-walks-past-the-ruins.jpg?s=612x612&w=0&k=20&c=3_z2hFsd8bXxcIWhyC5yvEUQ2UTBomwFKeLtfjcO0XI=',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://media.istockphoto.com/id/503482914/photo/nuclear-apocalypse-survivor.jpg?s=612x612&w=0&k=20&c=613xZTPUm0LWIyxuJQUQZpL1MV5EwCLCRRSWRUp52uE=',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://media.istockphoto.com/id/1185323268/photo/post-apocalyptic-soldier-in-tactical-jacket-gas-mask-gloves-rifle-and-armor-aiming-on.jpg?s=612x612&w=0&k=20&c=-_kKO1Jmyk86e_faetnPPbRGiFB2gnqYLlctfkxn_lk=',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://media.istockphoto.com/id/505603265/photo/man-in-a-hazmat-suit-holding-vial.jpg?s=612x612&w=0&k=20&c=zdKlRBEPEzBhySw9Aoo0keWuhW7M37928FD4ySplVNA=',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://media.istockphoto.com/id/483677131/photo/mechanic-working-with-a-huge-plier.jpg?s=612x612&w=0&k=20&c=hPcrHmIcqDgxXleqye6HEZM1GWu-qZaXeX2cA61Xag4=',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://media.istockphoto.com/id/186324439/photo/gas-mask-super-villain-or-superhero-costume-for-halloween.jpg?s=612x612&w=0&k=20&c=EohTFRBLe-9OL-U4leFcXEU2PCR3xNKh2B6IJTWObJo=',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://media.istockphoto.com/id/179138736/photo/male-bow-hunter-wearing-gas-mask.jpg?s=612x612&w=0&k=20&c=WjeA0v8OHXkylG0NEfH67AdVuXzIlxw7jqeVFBvvwKA=',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://media.istockphoto.com/id/1221577363/photo/post-apocalyptic-survivor-with-skulls.jpg?s=612x612&w=0&k=20&c=Kb580-9twcoTfcUsbD3aU54UoqN70dBpCv7idCmyUPM=',
      },
    ]);

    const [errorMessage, setErrorMessage] = useState('');

  const handleAddFighter = (newFighter) => {
    if (money >= newFighter.price) {
      setTeam((oldTeam) => [...oldTeam, newFighter]);
      setZombieFighters((oldFighters) => oldFighters.filter(chosenFighter => chosenFighter.id !== newFighter.id));
      setMoney((oldMoney) => oldMoney - newFighter.price);
      setErrorMessage('');
    } else {
      setErrorMessage("Not enough money");
    }
  };

  const handleRemoveFighter = (lostFighter) => {
    setTeam((oldTeam) => oldTeam.filter(chosenFighter => chosenFighter.id !== lostFighter.id));
    setZombieFighters((oldFighters) => [...oldFighters, lostFighter]);
    setMoney((oldMoney) => oldMoney + lostFighter.price);
  };

  const calculateTotalStrength = (team) => {
    const { totalStrength } = team.reduce((totals, zombieFighter) => {
      totals.totalStrength += zombieFighter.strength;
      return totals;
    }, { totalStrength: 0 });

    return totalStrength;
  };
  const totalStrength = calculateTotalStrength(team);

  const calculateTotalAgility = (team) => {
    const { totalAgility } = team.reduce((totals, zombieFighter) => {
      totals.totalAgility += zombieFighter.agility;
      return totals;
    }, { totalAgility: 0 });

    return totalAgility;
  };
  const totalAgility = calculateTotalAgility(team);

  return (
    <div>
      <h1>Apocalypse Team!</h1>
      <h2>Total Money: ${money}</h2>
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} {/* Render error message */}

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
              <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h4>Total Strength: {totalStrength}</h4>
      <h4>Total Agility: {totalAgility}</h4>
    </div>
  );
};

export default App;
