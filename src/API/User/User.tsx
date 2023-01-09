import './User.css'
import Avatar from "../Avatar/Avatar"
import { TypeTweet } from '../tweetAPI'

type usertipo = {
  name : string;
  nickname: string;
  avatarUrl: string;
}

type UserProps = {
  user:usertipo;
}


const User = (props:UserProps) => {
    return (
    <div className="User">
       <Avatar user = {props.user}/>
       <div className="Names">
        <h4 className="User-name">{props.user.name}</h4>
        <h6 className ="User-nickname"> {props.user.nickname}</h6>
        </div>
      </div>
    )
}
export default User;