import { TweetContent } from "../TweetContent/TweetContent";
import User from "../User/User" 
import './Tweet.css'
import {FaToilet} from 'react-icons/fa'
import { TypeTweet } from "../tweetAPI";
import { MouseEventHandler, useContext } from "react";
import { TweetContext } from "../../Context/context";

type TweetProp = {
//  tweet:TypeTweet;
  index:number;
//  aggiungiLike: MouseEventHandler<HTMLButtonElement>;
//  elimina: MouseEventHandler<HTMLButtonElement>;

}

const Tweet = ({index}: TweetProp) => {

  const {tweetLista,setTweetList} = useContext(TweetContext);

  const elimina = (index: number) => {
    if (tweetLista !== undefined) {
      console.log("Tweet eliminato");
      const temp:TypeTweet[] = [...tweetLista];
      temp.splice(index, 1);
      setTweetList(temp);
    }
  };



  


  return (
    <div className="Tweet" key={tweetLista[index].id}>
      <img className="Tweet-image" src={tweetLista[index].tweetContent.imageUrl} alt={tweetLista[index].tweetContent.text} />
      <User user={tweetLista[index].user} />
      <TweetContent tweetContent = {tweetLista[index].tweetContent}/>
      <div className="Divbottone">
      <button className='bottone-elimina' onClick={()=>elimina(index)}><FaToilet className="wc"/></button>
      </div>
    </div>
  );
};

export default Tweet;
