import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://getwallpapers.com/wallpaper/full/2/d/7/551756.jpg"
              className="d-block w-100 "
              alt=""
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.adorama.com/alc/wp-content/uploads/2020/04/filmmakers-onset-warehouse-interview.jpg"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i1.wp.com/peekatthis.com/wp-content/uploads/2021/04/9.jpg?w=1920&ssl=1"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
