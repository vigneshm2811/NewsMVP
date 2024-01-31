import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor() {
    super();
    console.log("items");
  }

  render() {
    let { title, discription, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card ">
     
        <span className="  badge rounded-pill bg-danger badgePosition" >
            {source}
          </span>
       
          <img
            src={
              !imageUrl
                ? "https://img.etimg.com/thumb/msid-107099933,width-1200,height-630,imgsize-248774,overlay-etmarkets/photo.jpg"
                : imageUrl
            }
            className="card-img-top cardImages"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
