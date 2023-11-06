import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botData, addBotToArmy }) {
  return (
    
    <div className="ui four column grid">
          <h2 id="header2">Collection of all bots</h2>
      <div className="row">
      
        {botData.map((bot) => (
          <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;