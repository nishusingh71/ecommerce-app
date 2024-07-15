import React from "react";
import { Link } from "react-router-dom";
export default function NewsItem({ n, i }) {
  return (
    <div className="col-sm-3 mb-3" key={i}>
      <div className="card">
        <img src={n.image_url} className="card-img-top" alt={n.title} />
        <div className="card-body">
          <h5 className="card-title">{n.title}</h5>
          <p className="card-text">
            {n.description?.length > 100
              ? n.description.slice(0, 100) + "..."
              : n.description}
          </p>
          <Link to={n.link} target="_blank" className="btn btn-primary">
            Read More ..
          </Link>
        </div>
      </div>
    </div>
  );
}
