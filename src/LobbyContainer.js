import React, { useState, useEffect } from "react";
import { fetch } from "./fetchMock";
import Lobby from "./Lobby";

export default function LobbyContainer() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/lobby/game-tiles-data")
      .then((response) => {
        setData(response.data);
        setRecords(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  console.log(error);
  return (
    <Lobby
      data={data}
      records={records}
      setRecords={setRecords}
      loading={loading}
      error={error}
    />
  );
}
