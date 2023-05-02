import React from "react";

import GameTile from "./GameTile";
import localise from "./localisationService";

const Lobby = ({ data, records, setRecords, loading, error }) => {
  const Filter = (event) => {
    setRecords(
      data.filter((elem, i) => {
        return elem.type.toLowerCase().includes(event.target.value);
      })
    );
  };

  return (
    <>
      <h2>List of Games</h2>
      <input type="text" placeholder="search" onChange={Filter} />
      <ul>
        {error && <p>Something error here...</p>}
        {loading ? (
          <p>Loading....</p>
        ) : (
          records.map((tile, i) => {
            return (
              <GameTile
                key={i}
                imageUrl={tile.imageUrl}
                link={tile.link}
                gameTitle={tile.gameTitle}
                localise={(...args) => localise(...args)}
              />
            );
          })
        )}
      </ul>
    </>
  );
};

export default Lobby;
