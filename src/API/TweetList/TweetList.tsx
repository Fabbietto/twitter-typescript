import { TweetContext } from "../../Context/context";
import Tweet from "../Tweet/Tweet";
import {useContext} from 'react';
import './TweetList.css'
/*
type TweetListProp = {
  lista:TypeTweet[] | undefined ;
  elimina: (index: number) => void;
  aggiungiLike: (index: number) => void;
}
*/



//const TweetList = ({lista, elimina, aggiungiLike}:TweetListProp) => {


  const TweetList = () => {
    const {tweetLista} = useContext(TweetContext);
  if (tweetLista !== undefined  && tweetLista.length > 0) {
    return (
      <div className="TweetList">
        {tweetLista.map((_, index) => {
           
          return (
            <Tweet
              key={index}
              index={index}
            />
          );
        })}
      </div>
    )
  }
    else{
      return  <p className="testoo">
      Non ci s<span className="delay1">o</span>no pos
      <span className="delay2">t</span>, clicca il bot
      <span className="delay3">t</span>one
    </p>;
  

    }
  };

export default TweetList;
