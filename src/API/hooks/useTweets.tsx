
import  {useEffect, useState} from "react";
import { getTweets } from "../API/tweetAPI";

export const useTweet = () =>{
    const [tweetList, setLista] = useState();

    useEffect(() => {
      setLista(getTweets());
    }, []);
  
    const elimina = (index) => {
      console.log("Tweet eliminato");
      const temp = [...tweetList];
      temp.splice(index, 1);
      setLista(temp);
    };
  
    const aggiunta = () => {
      console.log("Tweet nuovo");
      const temp = [...tweetList];
      temp.unshift({
        //unshift mi pone il nuovo tweet davanti ai vecchi
        id: 88,
        tweetContent: {
          imageUrl:
            "https://clashofclans-layouts.com/pics/th11_plans/defence/original/th11_defence_42.jpg",
          text: "Nuovo aggiornamento disponibileee!!!",
          likes: 865145895, 
          liked: false,
          views: 1547859862,
          tweetDate: new Date(),
        },
        user: {
          name: "CoC_ITA",
          nickname: "@ClashOfClansITA",
          avatarUrl:
            "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm",
        },
      });
      setLista(temp);
    };
    
    const aggiungiLike = (index) =>{
        console.log("like evviva");
        const tempTweet = [...tweetList];
        
        if (tempTweet[index].tweetContent.liked === false) {
          tempTweet[index].tweetContent.liked = true;
          tempTweet[index].tweetContent.likes+=1;
        }
        else{
          tempTweet[index].tweetContent.liked = false;
          tempTweet[index].tweetContent.likes-=1;
        }
        setLista(tempTweet);
      }
      return{aggiunta,tweetList,elimina,aggiungiLike};
}