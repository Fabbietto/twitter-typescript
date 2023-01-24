import {createContext} from "react";
import { TypeTweet } from "../API/tweetAPI";

type TweetContentType = {
    tweetLista : TypeTweet[];
    setTweetList : (tweetList:TypeTweet[]) => void;
    
}

export const TweetContext = createContext<TweetContentType>({
    tweetLista: [],
    setTweetList: ()=>{},
});
