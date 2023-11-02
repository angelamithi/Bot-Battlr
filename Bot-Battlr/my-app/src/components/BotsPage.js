import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [data, setData] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((bots) => {
        setData(bots);
      });
  }, []);

  function addBotToArmy(bot) {
    setSelectedBots([...selectedBots, bot]);
  }

  return (
    <div>
      {selectedBots.length > 0 && <YourBotArmy bots={selectedBots} />}
      <BotCollection botData={data} addBotToArmy={addBotToArmy} />
      
    </div>
  );
}

export default BotsPage;