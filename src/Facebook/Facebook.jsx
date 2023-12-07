import React from "react";
import "./Facebook.css";
import { CiBoxList } from "react-icons/ci";
import { FaPhotoVideo } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

function Facebook() {
  return (
    <div className="facebook">
      <div className="container">
        <div className="div">
          <span className="icon"><CiBoxList /></span>
          <span>List</span>
        </div>
        <div className="div">
          <span className="icon"><FaPhotoVideo /></span>
          <span>Photo/Videos</span>
        </div>
        <div className="div">
          <span className="icon"><MdPersonAddAlt1 /></span>
          <span>Tag friends</span>
        </div>
        <div className="div">
          <span className="icon"><IoIosMore /></span>
        </div>
      </div>
    </div>
  );
}

export default Facebook;
