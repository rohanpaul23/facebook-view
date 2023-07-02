import "./profile.css";
import Header from "../../components/Header/";
import FeedOptions from "../../components/FeedOptions/";
import Feed from "../../components/Feed";
import FriendsDetails from "../../components/FriendsDetails";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <FeedOptions />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <FriendsDetails profile />
          </div>
        </div>
      </div>
    </>
  );
}
