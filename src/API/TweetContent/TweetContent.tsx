import "./TweetContent.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MouseEventHandler, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
/*import { getTweets } from '../../API/tweetAPI';

*/

type Tweetappoggio = {
  imageUrl: string;
  text: string;
  liked: boolean;
  likes: number;
  views: number;
  tweetDate: Date;
};

type TweetContentProps = {
  tweetContent: Tweetappoggio;
  //  aggiungiLike: MouseEventHandler<HTMLButtonElement>;
  // tweetDate:Date;
};
export const TweetContent = ({ tweetContent }: TweetContentProps) => {
  const [likeBoolean, setLikeBoolean] = useState(false);
  const [likes, setLikes] = useState(tweetContent.likes);

  const aggiungiLike = () => {
    if (typeof likes == "number") {
      if (likeBoolean === false) {
        setLikes(likes + 1);
        setLikeBoolean(true);
      } else {
        setLikes(likes - 1);
        setLikeBoolean(false);
      }
    }
  };

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
    <Box>
      <Box textAlign="left" ml="30" mr="30">
        {tweetContent.text}
      </Box>
      <Box display="flex" alignItems="center">
        <Button onClick={aggiungiLike} alignItems="center" ml="8" w="20" h="30" border="none" background="none" p="0">
        
          <AiOutlineHeart className="cuore" />{" "}
          </Button>

        <Box mr="10" ml="10">
          <p>{tweetContent.likes}</p>
        </Box>
        <AiOutlineEye className="occhio" />
        <div className="views">{tweetContent.views}</div>
      </Box>
    </Box>
  );
};

// const formatDate = (rawDate:Date) => {
//   return rawDate;
// };
