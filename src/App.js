import "./Style.scss";
import Posts from "./Posts";
import shuriken from "./shuriken.png";
import Feedback from "./Feedback";
import { useEffect, useState } from "react";
const url = "https://api.first.org/data/v1/news";

function App() {
  const [posts, setPost] = useState([]);

  const [viewtoggle, setViewToggle] = useState("info-posts");

  const totalNoOfPosts = 30;
  const fetchData = async () => {
    const res = await fetch(url);
    const dataModel = await res.json();
    setPost(dataModel.data.slice(0, totalNoOfPosts));
    // console.log(dataModel.data.slice(0, 15));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="heading-post">
        <img src={shuriken} className="shuriken"></img>
        Ninja Posts
        <img src={shuriken} className="shuriken"></img>
      </h1>
      <div className="container">
        <div className="feedback">
          <Feedback viewtoggle={viewtoggle} setViewToggle={setViewToggle} />
        </div>
        <div className="posts">
          <Posts
            posts={posts}
            viewtoggle={viewtoggle}
            setViewToggle={setViewToggle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
