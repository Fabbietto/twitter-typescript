import { TweetContent } from "../TweetContent/TweetContent";
import User from "../User/User" 
import './Tweet.css'
import {FaToilet} from 'react-icons/fa'

const Tweet = (props) => {


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
