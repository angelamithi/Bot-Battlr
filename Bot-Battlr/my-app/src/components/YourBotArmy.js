import React from "react";

function YourBotArmy({ bots }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          <ul>
            {bots.map((bot,index) => (
         <div className="image" key={index}>
          <img alt="army bot" src={bot.avatar_url} />
          <div>{bot.name}</div>
        </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;