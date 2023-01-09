import "./TweetContent.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MouseEventHandler } from "react";
/*import { getTweets } from '../../API/tweetAPI';

*/

type Tweetappoggio = {
  
  imageUrl: string,
  text: string,
  liked: boolean,
  likes: number,
  views: number,
  tweetDate: Date,
}

type TweetContentProps= {
  tweetContent:Tweetappoggio;
  aggiungiLike: MouseEventHandler<HTMLButtonElement>;
  // tweetDate:Date;
}
export const TweetContent = (props:TweetContentProps) => {
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
        {/* <div className="Formatted-date">{formatDate(props.tweetContent.tweetDate)}</div> */}
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

// const formatDate = (rawDate:Date) => {
//   return rawDate;
// };
