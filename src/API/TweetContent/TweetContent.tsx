import "./TweetContent.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
/*import { getTweets } from '../../API/tweetAPI';

*/
export const TweetContent = (props) => {
  /*
  const [prova] = getTweets(); 

  const [tweetList , setLista ] = useState(prova) ;

  const elimina = (index) =>{
    console.log("Tweet eliminato");
    const temp = [...tweetList];
    temp.splice(index,1);
    setLista(temp);
  }
*/
  return (
    <div className="Tweet-content">
      <div className="Tweet-text">{props.tweetContent.text}</div>
      <div className="feedback">
        <div className="Formatted-date">{formatDate(props.tweetDate)}</div>
        <button className="likeplus" onClick={props.aggiungiLike}><AiOutlineHeart className="cuore"/></button>
         <div className="likes">
          <p>{props.tweetContent.likes}</p>
        </div>
        <AiOutlineEye className="occhio"/>
        <div className="views">{props.tweetContent.views}</div>
      </div>
    </div>
  );
};

const formatDate = (rawDate) => {
  return rawDate;
};
