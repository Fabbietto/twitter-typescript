import { useTweet } from "./API/hooks/useTweets";
import TweetList from "./API/TweetList/TweetList";
import "./App.css";
import { Button } from '@chakra-ui/react'

function App() {

  const {aggiunta, tweetList, elimina,aggiungiLike} = useTweet();

  return (
    <div className="App">
      <div className="bottone">
        <Button onClick={aggiunta} mt='20px' mb='20px' fontSize= '30px' bg= '#57b1e8'>

  
          Aggiorna
        </Button>

      </div>
      <TweetList lista = {tweetList} elimina={elimina} aggiungiLike={aggiungiLike}/>
      
    </div>
  );
}

export default App;
