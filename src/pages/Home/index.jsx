import Header from "../../components/Header";
import FeedOptions from "../../components/FeedOptions";
import Feed from "../../components/Feed";
import FriendsDetails from "../../components/FriendsDetails";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <FeedOptions />
        <Feed />
        <FriendsDetails />
      </div>
    </>
  );
}
