import React, { useState } from "react";
import Link from "./Link";
import { FcLike, FcLikePlaceholder, FcShare } from "react-icons/fc";
function Posts({ posts, showFeedback, setShowFeedback }) {
  const postsPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [def, setDef] = useState([]);
  const [alink, setALink] = useState();
  const [showLinks, setShowLinks] = useState(false);
  const [showTP, setShowTP] = useState("Show posts");
  const [like, setLike] = useState(false);
  const arr = [];

  function deletePost(id) {
    // console.log(id, posts);
    let arr = def.filter((e) => e.id !== id);
    setDef(arr);
  }

  function showPosts(e) {
    const value = postsPerPage * e - 1;
    const x = postsPerPage * (e - 1);
    // console.log(id);
    setDef(posts.slice(x, value + 1));
  }
  for (let i = 1; i <= posts.length / postsPerPage; i++) {
    arr.push(i);
  }
  function likepost(id) {
    setLike(!like);
  }
  return (
    <div className="Postlayout">
      <h1
        className="heading-showPosts"
        onClick={() => {
          setShowTP();
          setShowModal(true);
          setShowFeedback(true);
          setDef(posts.slice(0, postsPerPage));
        }}
      >
        <div className="showTodayPost">{showTP}</div>
      </h1>
      {def.map((e) => {
        const { id, published, title, link } = e;
        return (
          <div className="demo">
            <div className="posts">
              <div className="info-posts">
                <h3
                  key={id}
                  onClick={() => {
                    setShowModal(true);
                    setShowLinks(true);
                    setALink(link);
                  }}
                >
                  {title}
                </h3>
                <h4>{published}</h4>
                <div className="user-icons">
                  {like ? (
                    <FcLike
                      onClick={() => {
                        setLike(!like);
                      }}
                    />
                  ) : (
                    <FcLikePlaceholder
                      onClick={() => {
                        setLike(!like);
                      }}
                    />
                  )}
                  <FcShare className="like" />
                </div>
              </div>
            </div>
            <button
              className="delete"
              onClick={() => {
                deletePost(id);
              }}
            >
              X
            </button>
          </div>
        );
      })}

      <div className="page">
        {showModal &&
          arr.map((e) => {
            return (
              <div>
                <button className="pgno" onClick={() => showPosts(e)}>
                  {e}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
