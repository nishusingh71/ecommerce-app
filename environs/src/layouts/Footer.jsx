import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer bg-dark text-body py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 text-white">Newsletter</h4>
                <p className="mb-4">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit.
                </p>
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 bg-secondary w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn-hover-bg btn btn-primary position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Our Services</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Ocean Turtle
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> White Tiger
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Social Ecology
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Loneliness
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Beauty of Life
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Present for You
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Volunteer</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Karen Dawson
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Jack Simmons
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Michael Linden
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Simon Green
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Natalie Channing
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Caroline Gerwig
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 text-white">Our Gallery</h4>
                <div className="row g-2">
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-1.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-1.jpg"
                          data-lightbox="footerGallery-1"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-2.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-2.jpg"
                          data-lightbox="footerGallery-2"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-3.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-3.jpg"
                          data-lightbox="footerGallery-3"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-4.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-4.jpg"
                          data-lightbox="footerGallery-4"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-5.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-5.jpg"
                          data-lightbox="footerGallery-5"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-gallery">
                      <img
                        src="img/gallery-footer-6.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="footer-search-icon">
                        <a
                          href="img/gallery-footer-6.jpg"
                          data-lightbox="footerGallery-6"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copyright py-4">
        <div class="container">
          <div class="row g-4 align-items-center">
            <div class="col-md-4 text-center text-md-start mb-md-0">
              <span class="text-body">
                <a href="#">
                  <i class="fas fa-copyright text-light me-2"></i>Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div class="col-md-4 text-center">
              <div class="d-flex align-items-center justify-content-center">
                <a href="#" class="btn-hover-color btn-square text-white me-2">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn-hover-color btn-square text-white me-2">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="btn-hover-color btn-square text-white me-2">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="btn-hover-color btn-square text-white me-2">
                  <i class="fab fa-pinterest"></i>
                </a>
                <a href="#" class="btn-hover-color btn-square text-white me-0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4 text-center text-md-end text-body">
              Designed By{" "}
              <a class="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a class="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
