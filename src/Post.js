import React, { forwardRef } from "react";
import { RxAvatar } from "react-icons/rx";
import "./Post.css";
import { BiLike, BiCommentDots, BiRepost, BiSend } from "react-icons/bi";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <RxAvatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={BiLike} title="Like" color="gray" />
        <InputOption Icon={BiCommentDots} title="Comment" color="gray" />
        <InputOption Icon={BiRepost} title="Repost" color="gray" />
        <InputOption Icon={BiSend} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
