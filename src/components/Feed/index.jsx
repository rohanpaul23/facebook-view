// import Post from "../post/Post";
import ShareContent from "../ShareContent";
import "./feed.css";
import Post from "../Post";
import { Posts } from "../../data/dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <ShareContent />
        {Posts.map(post => {
          return <Post postItem={post} />;
        })}
        {/* <Post /> */}
      </div>
    </div>
  );
}
