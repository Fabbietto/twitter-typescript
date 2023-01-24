import TweetList from "./API/TweetList/TweetList";
import "./App.css";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { TweetContext } from "./Context/context";
import { getTweets, TypeTweet } from "./API/tweetAPI";

function App() {
  /*  const {aggiunta, tweetList, elimina,aggiungiLike} = useTweet();*/
  const [tweetLista, setTweetList] = useState(getTweets());

  const aggiunta = () => {
    if (tweetLista !== undefined) {
      console.log("Tweet nuovo");
      const temp: TypeTweet[] = [...tweetLista];
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
      setTweetList(temp);
    }
  };
  return (
    <TweetContext.Provider value={{ tweetLista, setTweetList }}>
      <Box bg="#1DA1F2">
      <Box textAlign="center">
          <Button
            onClick={aggiunta}
            fontWeight = "bold"
            fontFamily = "Monospace"
            mt="20px"
            mb="20px"
            fontSize="30px"
            bg="#57b1e8"
            borderRadius="10%"
            borderColor="aqua"
            boxShadow="
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #0fa,
            0 0 82px #0fa,
            0 0 92px #0fa,
            0 0 102px #0fa,
            0 0 151px #0fa"
           className="bottone-agg">
            AGGIORNA
          </Button>
          </Box>
        <TweetList />
      </Box>
    </TweetContext.Provider>
  );
}

export default App;
