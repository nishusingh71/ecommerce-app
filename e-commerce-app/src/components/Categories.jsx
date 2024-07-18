import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Categories = () => {
  const categories = [
    { name: "Fresh Fruit", img: "img/categories/cat-1.jpg" },
    { name: "Dried Fruit", img: "img/categories/cat-2.jpg" },
    { name: "Vegetables", img: "img/categories/cat-3.jpg" },
    { name: "Drink Fruits", img: "img/categories/cat-4.jpg" },
    { name: "Drink Fruits", img: "img/categories/cat-5.jpg" },
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <OwlCarousel
            className="categories__slider owl-carousel"
            items={4}
            loop
            margin={10}
            nav
            autoplay
            autoplayTimeout={3000}
            autoplayHoverPause
          >
            {categories.map((category, index) => (
              <div className="col-lg-3" key={index}>
                <div
                  className="categories__item"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/${category.img})`,
                  }}
                >
                  <h5>
                    <Link to="#">{category.name}</Link>
                  </h5>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Categories;
