import React from 'react'
import { useEffect, useState } from 'react';
import styles from './components/Fetchapi.module.css'
function Fetchapi() {
  const [pokeData, setPokeData] = useState([])
  const [pokeDetails, setPokeDetails] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setPokeData(data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []
  )
  const fetchDetails = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setPokeDetails(data)
      })
      .then((error) => {
        console.error(error)
      })
  }
  return (

    <>
      <div className={styles.upperheader}>
        <h1>Pokemon Api Fetching</h1>

        <div className={styles.containerpoke}>
          {pokeDetails && (
            <div>
              <h2>Name: {pokeDetails.name.toUpperCase()}</h2>
              <div className={styles.image}><img src={pokeDetails.sprites.other.home.front_default} alt={pokeDetails.name} /></div>
              <h3>Abilities: <span>{pokeDetails.abilities.map(ability => ability.ability.name) + ('  ')} </span></h3>
              <h3>Types: <span>{pokeDetails.types.map(type => type.type.name) + (' ')} </span></h3>
              <h3>Height: <span>{pokeDetails.height}</span></h3>
              <h3>Weight: <span>{pokeDetails.weight}</span></h3>
              {/* <h3>Game indices:<span>{pokeDetails.game_indices.map(game_index => game_index.version.name) + (' ')}</span></h3> */}
            </div>
          )}
          <h3>Select the pokemon to view its details</h3>
        </div>
        {pokeData.map((item) => {
          return (
            <>
              <div className={styles.buttonclick}>
                
                <h4 key={item.name}>
                 
                  <button className={styles.buttonh} onClick={() => fetchDetails(item.url)}>{item.name.toUpperCase()}</button> </h4>
              </div>
            </>
          );
        })}

      </div>


    </>
  );
}

export default Fetchapi;
