import React from "react";

function YourBotArmy({ bots,deleteBot}) {
   
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
         <div className="row bot-army-row">          
          Your Bot Army
         {bots.map((bot,index) => (
         <div className="image" key={index} onClick={()=>deleteBot(bot.id)}>
          <img alt="army bot" src={bot.avatar_url} />
          <div>{bot.name}</div>
        </div>
            ))}
            </div>
          
   
      </div>
    </div>
  );
}

export default YourBotArmy;