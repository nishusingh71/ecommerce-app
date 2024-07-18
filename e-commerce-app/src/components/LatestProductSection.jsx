import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LatestProductSection = () => {
  return (
    <section className="latest-product spad">
      <div className="container">
        <div className="row">
          {/* Latest Products */}
          <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
              <h4>Latest Products</h4>
              <OwlCarousel
                className="latest-product__slider owl-carousel"
                items={1}
                loop
                margin={10}
                nav
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
              >
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
              </OwlCarousel>
            </div>
          </div>
          {/* Top Rated Products */}
          <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
              <h4>Top Rated Products</h4>
              <OwlCarousel
                className="latest-product__slider owl-carousel"
                items={1}
                loop
                margin={10}
                nav
                autoplay
                autoplayTimeout={3000} // 3 seconds
                autoplayHoverPause
              >
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
              </OwlCarousel>
            </div>
          </div>
          {/* Review Products */}
          <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
              <h4>Review Products</h4>
              <OwlCarousel
                className="latest-product__slider owl-carousel"
                items={1}
                loop
                margin={10}
                nav
                autoplay
                autoplayTimeout={3000} // 3 seconds
                autoplayHoverPause
              >
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
                <div className="latest-prdouct__slider__item">
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                  <Link to="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="Product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </Link>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProductSection;
