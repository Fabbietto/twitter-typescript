
type TypeTweet = {
  id: number,
  tweetContent: {
    imageUrl: string,
    text: string,
    liked: boolean,
    likes: number,
    views: number,
    tweetDate: Date,
  },
  user: {
    name : string;
    nickname: string;
    avatarUrl: string;
  }
    }


export const getTweets = () : TypeTweet[] => {
    return [
      {
        id: 55,
          tweetContent: {
            imageUrl: "https://assets.khelnow.com/ews/uploads/2022/11/c24715184f8e057a.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
                liked: false,
                likes: 8461,
                views: 17855,
            tweetDate: new Date(),
        },
        user: {
          name: "Asano",
          nickname: "@GigaAsano",
          avatarUrl:
            "https://gianlucadimarzio.com/images/takuma-asano-giappone-getty.jpg?p=14x9&s=2904b32571799644740bf8035c2d1e28",
        },
      },
      {
        id: 5,
        tweetContent: {
          imageUrl:
            "https://cdn.tuttosport.com/img/990/495/2022/12/06/205103320-7611c38a-1078-43bb-8cc0-e955bde5a026.jpg",
          text: "daje che oggi gli facciamo il bucio di c***",
          likes: 95641,
          liked: false, 
          views: 785984,
          tweetDate: new Date(),
        },
        user: {
          name: "Luca Lattanzio",
          nickname: "@Laki",
          avatarUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nordin_Amrabat_%28cropped%29.jpg",
        },
      },
      {
        id: 20,
        tweetContent: {
          imageUrl: "https://images2.alphacoders.com/102/1026517.jpg",
          text: "Posto consigliatissimo, facile da raggiungere, basterà acamminare per 40 giorni verso Nord per poi svoltare verso Est per altri 15 gg. Arrivati davanti ad una caverna dovrete parlare con un orco che vi farà tre indovinelli. Questa la caverna dell'orco",
          likes: 685981, 
          liked: false,
          views: 415864106,
          tweetDate: new Date(),
        },
        user: {
          name: "Brutus",
          nickname: "@IlDioGreco",
          avatarUrl:
            "https://i.pinimg.com/originals/ad/89/75/ad8975af8cd031adad21e02ee328d806.jpg",
        },
      },
    ];
  };
  