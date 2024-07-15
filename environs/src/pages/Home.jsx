import React from "react";

export default function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid carousel-header vh-100 px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="img/carousel-1.jpg"
                className="d-block w-100"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3"
                  style={{
                    maxWidth: "900px",
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{
                      letterSpacing: "3px",
                    }}
                  >
                    WE'll Save Our Planet
                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Protect Environment
                  </h1>
                  <p className="mb-5 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                      href="#"
                    >
                      Join With Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-2.jpg"
                className="d-block w-100"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3"
                  style={{
                    maxWidth: "900px",
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{
                      letterSpacing: "3px",
                    }}
                  >
                    WE'll Save Our Planet
                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Protect Environment
                  </h1>
                  <p className="mb-5 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                      href="#"
                    >
                      Join With Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-3.jpg"
                className="d-block w-100"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3"
                  style={{
                    maxWidth: "900px",
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{
                      letterSpacing: "3px",
                    }}
                  >
                    WE'll Save Our Planet
                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Protect Environment
                  </h1>
                  <p className="mb-5 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                      href="#"
                    >
                      Join With Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
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
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid about  py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5">
              <div className="h-100">
                <img
                  src="img/about-1.jpg"
                  className="img-fluid w-100 h-100"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-xl-7">
              <h5 className="text-uppercase text-primary">About Us</h5>
              <h1 className="mb-4">Our main goal is to protect environment</h1>
              <p className="fs-5 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
              <div className="tab-class bg-secondary p-4">
                <ul className="nav d-flex mb-2">
                  <li className="nav-item mb-3">
                    <a
                      className="d-flex py-2 text-center bg-white active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span
                        className="text-dark"
                        style={{
                          width: "150px",
                        }}
                      >
                        About
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      className="d-flex py-2 mx-3 text-center bg-white"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span
                        className="text-dark"
                        style={{
                          width: "150px",
                        }}
                      >
                        Mission
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a
                      className="d-flex py-2 text-center bg-white"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span
                        className="text-dark"
                        style={{
                          width: "150px",
                        }}
                      >
                        Vision
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">
                              Lorem Ipsum 1
                            </h5>
                            <p className="mb-4">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              <a
                                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                                href="#"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">
                              Lorem Ipsum 2
                            </h5>
                            <p className="mb-4">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              <a
                                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                                href="#"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">
                              Lorem Ipsum 3
                            </h5>
                            <p className="mb-4">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              <a
                                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                                href="#"
                              >
                                Read More
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
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services Start --> */}
      <div className="container-fluid service py-5 bg-light">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{
              maxWidth: "800px",
            }}
          >
            <h5 className="text-uppercase text-primary">What we do</h5>
            <h1 className="mb-0">What we do to protect environment</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="service-item">
                <img
                  src="img/service-1.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="service-link">
                  <a href="#" className="h4 mb-0">
                    Raising money to help
                  </a>
                </div>
              </div>
              <p className="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="service-item">
                <img
                  src="img/service-2.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="service-link">
                  <a href="#" className="h4 mb-0">
                    {" "}
                    close work with services
                  </a>
                </div>
              </div>
              <p className="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="service-item">
                <img
                  src="img/service-3.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="service-link">
                  <a href="#" className="h4 mb-0">
                    Pro Guided tours only
                  </a>
                </div>
              </div>
              <p className="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="service-item">
                <img
                  src="img/service-4.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="service-link">
                  <a href="#" className="h4 mb-0">
                    Protecting animal area
                  </a>
                </div>
              </div>
              <p className="my-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Donation Start --> */}
      <div className="container-fluid donation py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{
              maxWidth: "800px",
            }}
          >
            <h5 className="text-uppercase text-primary">Donation</h5>
            <h1 className="mb-0">Your money will save our life</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="img/donation-1.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">Organic</h5>
                  <a href="#" className="btn-hover-color display-6 text-white">
                    Help Us More
                  </a>
                  <h4 className="text-white mb-4">Protect Environments</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                      href="#"
                    >
                      Donate !
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="img/service-2.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">
                    Ecosystem
                  </h5>
                  <a href="#" className="btn-hover-color display-6 text-white">
                    Help Us More
                  </a>
                  <h4 className="text-white mb-4">Protect Environments</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                      href="#"
                    >
                      Donate !
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img
                  src="img/donation-3.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4">
                    Recycling
                  </h5>
                  <a href="#" className="btn-hover-color display-6 text-white">
                    Help Us More
                  </a>
                  <h4 className="text-white mb-4">Protect Environments</h4>
                  <p className="text-white mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                      href="#"
                    >
                      Donate !
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  All Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donation End --> */}

      {/* <!-- Counter Start --> */}
      <div
        className="container-fluid counter py-5"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(img/volunteers-bg.jpg) center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{
              maxWidth: "800px",
            }}
          >
            <h5 className="text-uppercase text-primary">Achievements</h5>
            <p className="text-white mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5">
                <i className="fas fa-thumbs-up fa-4x text-white"></i>
                <h3 className="text-white my-4">Beavers Saved</h3>
                <div className="counter-counting">
                  <span
                    className="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    3600
                  </span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5">
                <i className="fas fa-file-invoice-dollar fa-4x text-white"></i>
                <h3 className="text-white my-4">Funds Collected</h3>
                <div
                  className="counter-counting text-center border-white w-100"
                  style={{
                    borderStyle: "dotted",
                    fontSize: "30px",
                  }}
                >
                  <span
                    className="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    513
                  </span>
                  <span className="h1 fw-bold text-primary">$</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5">
                <i className="fas fa-user fa-4x text-white"></i>
                <h3 className="text-white my-4">Volunteer</h3>
                <div
                  className="counter-counting text-center border-white w-100"
                  style={{
                    borderStyle: "dotted",
                    fontSize: "30px",
                  }}
                >
                  <span
                    className="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    713
                  </span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter-item text-center border p-5">
                <i className="fas fa-heart fa-4x text-white"></i>
                <h3 className="text-white my-4">Days of Help</h3>
                <div
                  className="counter-counting text-center border-white w-100"
                  style={{
                    borderStyle: "dotted",
                    fontSize: "30px",
                  }}
                >
                  <span
                    className="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    487
                  </span>
                  <span className="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Counter End --> */}

      {/* <!-- Causes Start --> */}
      <div className="container-fluid causes py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{
              maxWidth: "800px",
            }}
          >
            <h5 className="text-uppercase text-primary">Recent Causes</h5>
            <h1 className="mb-4">The environment needs our protection</h1>
            <p className="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img
                    src="img/causes-4.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                  <div className="causes-link pb-2 px-3">
                    <small className="text-white">
                      <i className="fas fa-chart-bar text-primary me-2"></i>
                      Goal: $3600
                    </small>
                    <small className="text-white">
                      <i className="fa fa-thumbs-up text-primary me-2"></i>
                      Raised: $4000
                    </small>
                  </div>
                  <div className="causes-dination p-2">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>65%</span>
                  </div>
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">First environments activity of</h4>
                  <p className="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img
                    src="img/causes-2.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                  <div className="causes-link pb-2 px-3">
                    <small className="text-white">
                      <i className="fas fa-chart-bar text-primary me-2"></i>
                      Goal: $3600
                    </small>
                    <small className="text-white">
                      <i className="fa fa-thumbs-up text-primary me-2"></i>
                      Raised: $4000
                    </small>
                  </div>
                  <div className="causes-dination p-2">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>75%</span>
                  </div>
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">Build school for poor children.</h4>
                  <p className="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img
                    src="img/causes-3.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                  <div className="causes-link pb-2 px-3">
                    <small className="text-white">
                      <i className="fas fa-chart-bar text-primary me-2"></i>
                      Goal: $3600
                    </small>
                    <small className="text-white">
                      <i className="fa fa-thumbs-up text-primary me-2"></i>
                      Raised: $4000
                    </small>
                  </div>
                  <div className="causes-dination p-2">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">
                    Building clean-water system for rural poor.
                  </h4>
                  <p className="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="causes-item">
                <div className="causes-img">
                  <img
                    src="img/causes-1.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                  <div className="causes-link pb-2 px-3">
                    <small className="text-white">
                      <i className="fas fa-chart-bar text-primary me-2"></i>
                      Goal: $3600
                    </small>
                    <small className="text-white">
                      <i className="fa fa-thumbs-up text-primary me-2"></i>
                      Raised: $4000
                    </small>
                  </div>
                  <div className="causes-dination p-2">
                    <a
                      className="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>95%</span>
                  </div>
                </div>
                <div className="causes-content p-4">
                  <h4 className="mb-3">
                    First environments activity of this summer.
                  </h4>
                  <p className="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Causes End --> */}

      {/* <!-- Events Start --> */}
      <div className="container-fluid event py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "800px" }}
          >
            <h5 className="text-uppercase text-primary">Upcoming Events</h5>
            <h1 className="mb-0">
              Help today because tomorrow you may be the one who needs more
              helping!
            </h1>
          </div>

          <div className="event-carousel owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-953px, 0px, 0px)",
                  transition: "all 1s ease 0s",
                  width: "3816px",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-3.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-4.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-1.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-2.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-3.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-4.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-1.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "451.9px", marginRight: "25px" }}
                >
                  <div className="event-item">
                    <img
                      src="img/events-2.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="event-content p-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-body">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          Grand Mahal, Dubai 2100.
                        </span>
                        <span className="text-body">
                          <i className="fas fa-calendar-alt me-2"></i>10 Feb,
                          2023
                        </span>
                      </div>
                      <h4 className="mb-4">How To Build A Cleaning Plan</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectur adip sed eiusmod
                        amet consectur adip sed eiusmod tempor.
                      </p>
                      <a
                        className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev">
                <i className="bi bi-arrow-left"></i>
              </div>
              <div className="owl-next">
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
      {/* <!-- Events End --> */}

      {/* <!-- Blog Start --> */}
      <div className="container-fluid blog py-5 mb-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{
              maxWidth: "800px",
            }}
          >
            <h5 className="text-uppercase text-primary">Latest News</h5>
            <h1 className="mb-0">
              Help today because tomorrow you may be the one who needs more
              helping!
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-3">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-1.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock"></i> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart"></i>
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment"></i>
                      </a>
                    </div>
                  </div>
                  <div className="search-icon">
                    <a
                      href="img/blog-1.jpg"
                      data-lightbox="Blog-1"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus btn-primary text-white p-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text-dark border p-4 ">
                  <h4 className="mb-4">Save The Topic Forests</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip sed eiusmod tempor.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-2.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock"></i> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart"></i>
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment"></i>
                      </a>
                    </div>
                  </div>
                  <div className="search-icon">
                    <a
                      href="img/blog-2.jpg"
                      data-lightbox="Blog-2"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus btn-primary text-white p-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text-dark border p-4 ">
                  <h4 className="mb-4">Save The Topic Forests</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip sed eiusmod tempor.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-3.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock"></i> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart"></i>
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment"></i>
                      </a>
                    </div>
                  </div>
                  <div className="search-icon">
                    <a
                      href="img/blog-3.jpg"
                      data-lightbox="Blog-3"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus btn-primary text-white p-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text-dark border p-4 ">
                  <h4 className="mb-4">Save The Topic Forests</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip sed eiusmod tempor.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-4.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="blog-info">
                    <span>
                      <i className="fa fa-clock"></i> Dec 01.2024
                    </span>
                    <div className="d-flex">
                      <span className="me-3">
                        {" "}
                        3 <i className="fa fa-heart"></i>
                      </span>
                      <a href="#" className="text-white">
                        0 <i className="fa fa-comment"></i>
                      </a>
                    </div>
                  </div>
                  <div className="search-icon">
                    <a
                      href="img/blog-4.jpg"
                      data-lightbox="Blog-4"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus btn-primary text-white p-3"></i>
                    </a>
                  </div>
                </div>
                <div className="text-dark border p-4 ">
                  <h4 className="mb-4">Save The Topic Forests</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                    consectur adip sed eiusmod tempor.
                  </p>
                  <a
                    className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}

      {/* <!-- Gallery Start --> */}
      <div className="container-fluid gallery py-5 px-0">
        <div
          className="text-center mx-auto pb-5"
          style={{
            maxWidth: "800px",
          }}
        >
          <h5 className="text-uppercase text-primary">Our work</h5>
          <h1 className="mb-4">We consider environment welfare</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur
            adip sed eiusmod tempor ipsum dolor sit amet consectur adip sed
            eiusmod amet consectur adip sed eiusmod tempor.
          </p>
        </div>
        <div className="row g-0">
          <div className="col-lg-4">
            <div className="gallery-item">
              <img src="img/gallery-2.jpg" className="img-fluid w-100" alt="" />
              <div className="search-icon">
                <a
                  href="img/gallery-2.jpg"
                  data-lightbox="gallery-2"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3"></i>
                </a>
              </div>
              <div className="gallery-content">
                <div className="gallery-inner pb-5">
                  <a href="#" className="h4 text-white">
                    Beauty Of Life
                  </a>
                  <a href="#" className="text-white">
                    <p className="mb-0">Gallery Name</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="img/gallery-3.jpg" className="img-fluid w-100" alt="" />
              <div className="search-icon">
                <a
                  href="img/gallery-3.jpg"
                  data-lightbox="gallery-3"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3"></i>
                </a>
              </div>
              <div className="gallery-content">
                <div className="gallery-inner pb-5">
                  <a href="#" className="h4 text-white">
                    Beauty Of Life
                  </a>
                  <a href="#" className="text-white">
                    <p className="mb-0">Gallery Name</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="gallery-item">
              <img src="img/gallery-1.jpg" className="img-fluid w-100" alt="" />
              <div className="search-icon">
                <a
                  href="img/gallery-1.jpg"
                  data-lightbox="gallery-1"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3"></i>
                </a>
              </div>
              <div className="gallery-content">
                <div className="gallery-inner pb-5">
                  <a href="#" className="h4 text-white">
                    Beauty Of Life
                  </a>
                  <a href="#" className="text-white">
                    <p className="mb-0">Gallery Name</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="gallery-item">
              <img src="img/gallery-4.jpg" className="img-fluid w-100" alt="" />
              <div className="search-icon">
                <a
                  href="img/gallery-4.jpg"
                  data-lightbox="gallery-4"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3"></i>
                </a>
              </div>
              <div className="gallery-content">
                <div className="gallery-inner pb-5">
                  <a href="#" className="h4 text-white">
                    Beauty Of Life
                  </a>
                  <a href="#" className="text-white">
                    <p className="mb-0">Gallery Name</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="img/gallery-5.jpg" className="img-fluid w-100" alt="" />
              <div className="search-icon">
                <a
                  href="img/gallery-5.jpg"
                  data-lightbox="gallery-5"
                  className="my-auto"
                >
                  <i className="fas fa-search-plus btn-hover-color bg-white text-primary p-3"></i>
                </a>
              </div>
              <div className="gallery-content">
                <div className="gallery-inner pb-5">
                  <a href="#" className="h4 text-white">
                    Beauty Of Life
                  </a>
                  <a href="#" className="text-white">
                    <p className="mb-0">Gallery Name</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery End --> */}

      {/* <!-- Volunteers Start --> */}
      <div className="container-fluid volunteer py-5 mt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="volunteer-img">
                    <img
                      src="img/volunteers-1.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="volunteer-title">
                      <h5 className="mb-2 text-white">Michel Brown</h5>
                      <p className="mb-0 text-white">Communicator</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="volunteer-img">
                    <img
                      src="img/volunteers-3.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="volunteer-title">
                      <h5 className="mb-2 text-white">Michel Brown</h5>
                      <p className="mb-0 text-white">Communicator</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="volunteer-img">
                    <img
                      src="img/volunteers-2.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="volunteer-title">
                      <h5 className="mb-2 text-white">Michel Brown</h5>
                      <p className="mb-0 text-white">Communicator</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="volunteer-img">
                    <img
                      src="img/volunteers-4.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                    <div className="volunteer-title">
                      <h5 className="mb-2 text-white">Michel Brown</h5>
                      <p className="mb-0 text-white">Communicator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <h5 className="text-uppercase text-primary">
                Become a Volunteer?
              </h5>
              <h1 className="mb-4">
                Join your hand with us for a better life and beautiful future.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor amet consectur adip sed
                eiusmod amet consectur adip sed eiusmod tempor amet consectur
                adip sed eiusmod amet consectur adip sed eiusmod tempor.
              </p>
              <p className="text-dark">
                <i className=" fa fa-check text-primary me-2"></i> We are
                friendly to each other.
              </p>
              <p className="text-dark">
                <i className=" fa fa-check text-primary me-2"></i> If you join
                with us,We will give you free training.
              </p>
              <p className="text-dark">
                <i className=" fa fa-check text-primary me-2"></i> Its an
                opportunity to help poor Environments.
              </p>
              <p className="text-dark">
                <i className=" fa fa-check text-primary me-2"></i> No goal
                requirements.
              </p>
              <p className="text-dark mb-5">
                <i className=" fa fa-check text-primary me-2"></i> Joining is
                tottaly free. We dont need any money from you.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Join With Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Volunteers End --> */}
    </>
  );
}
