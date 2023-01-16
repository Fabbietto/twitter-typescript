import Tweet from "../Tweet/Tweet";
import { TypeTweet } from "../tweetAPI";
import './TweetList.css'

type TweetListProp = {
  lista:TypeTweet[] | undefined ;
  elimina: (index: number) => void;
  aggiungiLike: (index: number) => void;
}



const TweetList = ({lista, elimina, aggiungiLike}:TweetListProp) => {

  if (lista !== undefined  && lista.length > 0) {
    return (
      <div className="TweetList">
        {lista.map((tweet, index) => {
           
          return (
            <Tweet
              tweet={tweet}
              key={index}
              elimina={() => elimina(index)}
              aggiungiLike={() => aggiungiLike(index)}
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
