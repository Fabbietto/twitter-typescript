import { TweetContent } from "../TweetContent/TweetContent";
import User from "../User/User" 
import './Tweet.css'
import {FaToilet} from 'react-icons/fa'
import { TypeTweet } from "../tweetAPI";
import { MouseEventHandler } from "react";

type TweetProp = {
  tweet:TypeTweet;
  aggiungiLike: MouseEventHandler<HTMLButtonElement>;
  elimina: MouseEventHandler<HTMLButtonElement>;

}

const Tweet = (props: TweetProp) => {


  return (
    <div className="Tweet" key={props.tweet.id}>
      <img className="Tweet-image" src={props.tweet.tweetContent.imageUrl} alt={props.tweet.tweetContent.text} />
      <User user={props.tweet.user} />
      <TweetContent tweetContent = {props.tweet.tweetContent} aggiungiLike={props.aggiungiLike} />
      <div className="Divbottone">
      <button className='bottone-elimina' onClick={props.elimina}><FaToilet className="wc"/></button>
      </div>
    </div>
  );
};

export default Tweet;
