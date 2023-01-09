import "./Avatar.css";

type avatartipo = {
  name : string;
  nickname: string;
  avatarUrl: string;
}

type AvatarProps = {
  user:avatartipo;
}

const Avatar = (props:AvatarProps) => {
    return (
    <img
    className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
    )
}

export default Avatar;