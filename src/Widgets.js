import React from "react";
import "./Widgets.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineFiberManualRecord } from "react-icons/md";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft"></div>
      <MdOutlineFiberManualRecord />
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <AiOutlineInfoCircle />
      </div>
      {newsArticle("Making CLONES!", "Breaking clones")}
      {newsArticle("Jobs Available", "Apply Now")}
      {newsArticle("How to REACT", "Full tutorial")}
      {newsArticle("New Years Celebration", "Welcoming 2023!")}
      {newsArticle("Job Outlook for 2023", "Where is the job market headed?")}
      {newsArticle("FrontEndDevelopment", "Learn More")}
    </div>
  );
}

export default Widgets;
