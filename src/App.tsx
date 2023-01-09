import { useTweet } from "./API/hooks/useTweets";
import TweetList from "./API/TweetList/TweetList";
import "./App.css";

function App() {

  const {aggiunta, tweetList, elimina,aggiungiLike} = useTweet();

  return (
    <div className="App">
      <div className="bottone">
        <button onClick={aggiunta} className="bottone-agg">
          Aggiorna
        </button>
      </div>
      <TweetList lista={tweetList} elimina={elimina} aggiungiLike={aggiungiLike}/>

    </div>
  );
}

export default App;
