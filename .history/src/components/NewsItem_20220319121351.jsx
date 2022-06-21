// import React, { Component } from "react";
import React from "react";

// export class NewsItem extends Component {
//   render() {=======> class base
const NewsItem =(props)=>{
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",
                        justifyContent:"flex-end",
                        position:"absolute",
                        right:"0"
                    
          }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
           
          </div>
         <img src={!imageUrl ? "https://cdn.cnn.com/cnnnext/dam/assets/220312171514-moma-evacuation-stabbing-super-tease.jpg":imageUrl}className="card-img-top"alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on{" "}{new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
          );
  }
// }

export default NewsItem;
