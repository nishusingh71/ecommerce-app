import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    { category: 'oranges fresh-meat', img: 'img/featured/feature-1.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'vegetables fastfood', img: 'img/featured/feature-2.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'vegetables fresh-meat', img: 'img/featured/feature-3.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'fastfood oranges', img: 'img/featured/feature-4.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'fresh-meat vegetables', img: 'img/featured/feature-5.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'oranges fastfood', img: 'img/featured/feature-6.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'fresh-meat vegetables', img: 'img/featured/feature-7.jpg', title: 'Crab Pool Security', price: '$30.00' },
    { category: 'fastfood vegetables', img: 'img/featured/feature-8.jpg', title: 'Crab Pool Security', price: '$30.00' }
  ];

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {products.map((product, index) => (
            <div className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`} key={index}>
              <div className="featured__item">
                <div
                  className="featured__item__pic"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${product.img})` }}
                >
                  <ul className="featured__item__pic__hover">
                    <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><Link to="#">{product.title}</Link></h6>
                  <h5>{product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
