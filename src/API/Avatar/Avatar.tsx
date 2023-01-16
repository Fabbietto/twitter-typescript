import "./Avatar.css";
import { Image } from '@chakra-ui/react'

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
    <Image
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
    )
}

export default Avatar;