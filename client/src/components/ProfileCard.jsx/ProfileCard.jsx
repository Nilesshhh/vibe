import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';


const ProfileCard = ({location}) => {

  const {user} = useSelector((state)=>state.authReducer.authData)
  const posts = useSelector((state)=>state.postReducer.posts);
  const serverPublic = 'http://localhost:5000/images/'

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
        <img src={user.coverPicture ? serverPublic + user.profilePicture : serverPublic + "img3.png"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt:"Write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === 'profilePage' ? "" : <span>
      <Link style={{textDecoration:'none', color:'inherit'}}  to ={`/profile/${user._id}`}>
      My Profile</Link></span>}
    </div>
  );
};

export default ProfileCard;
