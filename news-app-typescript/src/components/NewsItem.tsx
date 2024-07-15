import React from "react";
import { Link } from "react-router-dom";
interface NewsProps {
  n: any;
  i: any;
}
export default function NewsItem({ n, i }: NewsProps) {
  return (
    <div className="col-sm-3 mb-3">
      <div className="card" key={i}>
        <img src={n.urlToImage} className="card-img-top" alt={n.title} />
        <div className="card-body">
          <h5 className="card-title">
            {n.title?.length > 50 ? n.title.slice(0, 50) + "..." : n.title}
          </h5>
          <p className="card-text">
            {n.description?.length > 50
              ? n.description.slice(0, 50) + "..."
              : n.description}
          </p>
          <Link to={n.url} target="_blank" className="btn btn-primary">
            Read More ..
          </Link>
        </div>
      </div>
    </div>
  );
}
