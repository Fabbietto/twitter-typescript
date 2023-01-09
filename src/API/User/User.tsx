import './User.css'
import React from "react"
import Avatar from "../Avatar/Avatar"

const User = (props) => {
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