import React from "react";

export default function Newsitem(props) {

      let {title,description,imgUrl,newsUrl,author,date} = props;
      // this is card which takes props from newscomponent and displays each item 
    return (
      <>
        <div className={`card shodow position-relative my-3   mx-auto bg-${props.bgMode} borderborder-rounded  border-${props.bgMode==="light" ? "dark" : "light"} text-${props.bgMode==="light" ? "dark" : "light"}` } style={{width:"90%"}}>
          <span className="badge bg-danger position-absolute top-0 " style={{right:"0%",fontSize:"0.9rem"}}>{author?author.slice(0,20):"Unknown"}</span>
          <img src={imgUrl} className="card-img-top" alt="..." style={{width: "100%", height: "15rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">
              {description} ...
            </p>
            <p className={`card-text  text-${props.bgMode==="light" ? "muted" : "light"}`}>By : {author?author:"Unknown"} <br></br>At : {
            date===""?"---":date.slice(0,10)}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">
              View Full article
            </a>
          </div>
        </div>
      </>
    );
  }

