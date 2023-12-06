import React from "react";
import "./YoutubeGrid.css";
import image_1 from "../Assets/1.jpg";
import image_2 from "../Assets/2.jpg";
import image_3 from "../Assets/3.jpg";
import image_4 from "../Assets/4.jpg";
import image_5 from "../Assets/5.jpg";
import image_6 from "../Assets/6.jpg";
import image_7 from "../Assets/7.jpg";
import image_8 from "../Assets/8.jpg";
import avatar from "../Assets/avatar.png";
const YoutubeGrid = () => {
  const videos = [
    {
      id: 1,
      imageUrl: image_1,
      title: "10 Ways to Improve Your Productivity",
      username: "Raja jo",
      postedTime: "28 day ago",
      views: "100M",
      avatar: avatar,
    },
    {
      id: 2,
      imageUrl: image_2,
      title: "Exploring Hidden Gems",
      username: "Travel Vlogs",
      postedTime: "14 day ago",
      views: 500,
      avatar: avatar,
    },
    {
      id: 3,
      imageUrl: image_3,
      title: "Mastering Culinary Skills",
      username: "Easy Recipes",
      postedTime: "20 hours ago",
      views: "23M",
      avatar: avatar,
    },
    {
      id: 4,
      imageUrl: image_4,
      title: " Cryptocurrency",
      username: "A Beginner's Guide",
      postedTime: "4 day ago",
      views: 500,
      avatar: avatar,
    },
    {
      id: 5,
      imageUrl: image_5,
      title: "Yoga for Beginners: Relaxation Techniques",
      username: "Tech",
      postedTime: "2 hours ago",
      views: "100K",
      avatar: avatar,
    },
    {
      id: 6,
      imageUrl: image_6,
      title: "Fascinating Discoveries",
      username: "User2",
      postedTime: "10 day ago",
      views: "500K",
      avatar: avatar,
    },
    {
      id: 7,
      imageUrl: image_7,
      title: "DIY Home Decor: Creative Ideas",
      username: "Ideas",
      postedTime: "20 hours ago",
      views: "100K",
      avatar: avatar,
    },
    {
      id: 8,
      imageUrl: image_8,
      title: "Latest Gadgets Unboxed",
      username: "Tech Reviews",
      postedTime: "16 day ago",
      views: "50M",
      avatar: avatar,
    }
  ];

  return (
    <div className="grid-container">
      {videos.map((video) => (
        <div className="grid-item" key={video.id}>
          <img src={video.imageUrl} alt={video.title} />

          <div className="video-info">
            <div className="left">
              <img src={video.avatar} alt="Avatar" className="avatar" />
            </div>
            <div className="right">
              <h3 className="video-title">{video.title}</h3>
              <p className="username">{video.username}</p>
              <div className="right-sub">
              <p className="posted-time">{video.postedTime}</p>
              <p className="views">{video.views} views</p>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeGrid;
