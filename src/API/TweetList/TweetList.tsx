import React from "react";
import Tweet from "../Tweet/Tweet";
import './TweetList.css'

const TweetList = (props) => {

  if (props.lista !== undefined  && props.lista.length > 0) {
    return (
      <div className="TweetList">
        {props.lista.map((tweet, index) => {
           
          return (
            <Tweet
              tweet={tweet}
              key={index}
              elimina={() => props.elimina(index)}
              aggiungiLike={() => props.aggiungiLike(index)}
            />
          );
        })}
      </div>
    )}
    else{
      return  <p className="testoo">
      Non ci s<span className="delay1">o</span>no pos
      <span className="delay2">t</span>, clicca il bot
      <span className="delay3">t</span>one
    </p>;
  

    }
  };

export default TweetList;
