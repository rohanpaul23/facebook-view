import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";

import { Users } from "../../data/dummyData";

export default function Post({ postItem }) {
  const [likePost, setLikePost] = useState(postItem.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikePost(isLiked ? likePost - 1 : likePost + 1);
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter(u => u.id === postItem?.userId)[0].profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter(u => u.id === postItem?.userId)[0].username}
            </span>
            <span className="postDate">{postItem.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{postItem.desc}</span>
          <img className="postImg" src={postItem.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={() => handleLike()}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={() => handleLike()}
              alt=""
            />

            <span className="postLikeCounter">
              {//eslint-disable-next-line
              likePost + " " + "people like it"}
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {//eslint-disable-next-line
              postItem.comment + " " + "comments"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
