import "./Style.scss";
import Posts from "./Posts";
import shuriken from "./shuriken.png";
import Feedback from "./Feedback";
import { useEffect, useState } from "react";
const url = "https://api.first.org/data/v1/news";


function App() {
  const [posts, setPost] = useState([]);

  const [showFeedback, setShowFeedback] = useState(false);

  const totalNoOfPosts = 30;
  const fetchData = async () => {
    const res = await fetch(url);
    const dataModel = await res.json();
    
    setPost(dataModel.data.slice(0, totalNoOfPosts));
    console.log(dataModel);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(showFeedback);
  return (
    <>
      <h1 className="heading-post">
        <img src={shuriken} className="shuriken"></img>
        Ninja Posts
        <img src={shuriken} className="shuriken"></img>
      </h1>
      <div className="container">
        <div className="feedback">
          <Feedback
            showFeedback={showFeedback}
            setShowFeedback={setShowFeedback}
          />
        </div>
        <div className="posts">
          <Posts
            posts={posts}
            showFeedback={showFeedback}
            setShowFeedback={setShowFeedback}
          />
        </div>
      </div>
    </>
  );
}

export default App;
