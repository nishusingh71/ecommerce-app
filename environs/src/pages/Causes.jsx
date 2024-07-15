import React from "react";

export default function Causes() {
  return (
    <>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: " 900px;" }}>
          <h3 class="text-white display-3 mb-4">Recent Causes</h3>
          <p class="fs-5 text-white mb-4">
            Help today because tomorrow you may be the one who needs more
            helping!
          </p>
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li class="breadcrumb-item active text-white">Causes</li>
          </ol>
        </div>
      </div>
      {/* <div
        class="container-fluid counter py-5"
        style={{
          background:
            " linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(img/volunteers-bg.jpg) center center;",
          backgroundSize: " cover;",
        }}
      ></div> */}
      {/* <div class="container py-5">
          <div class="text-center mx-auto pb-5" style={{ maxWidth: "800px;" }}>
            <h5 class="text-uppercase text-primary">Achievements</h5>
            <p class="text-white mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter-item text-center border p-5">
                <i class="fas fa-thumbs-up fa-4x text-white"></i>
                <h3 class="text-white my-4">Beavers Saved</h3>
                <div class="counter-counting">
                  <span
                    class="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    3600
                  </span>
                  <span class="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter-item text-center border p-5">
                <i class="fas fa-file-invoice-dollar fa-4x text-white"></i>
                <h3 class="text-white my-4">Funds Collected</h3>
                <div
                  class="counter-counting text-center border-white w-100"
                  style={{ borderStyle: " dotted;", fontSize: " 30px;" }}
                >
                  <span
                    class="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    513
                  </span>
                  <span class="h1 fw-bold text-primary">$</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter-item text-center border p-5">
                <i class="fas fa-user fa-4x text-white"></i>
                <h3 class="text-white my-4">Volunteer</h3>
                <div
                  class="counter-counting text-center border-white w-100"
                  style={{ borderStyle: " dotted;", fontSize: " 30px;" }}
                >
                  <span
                    class="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    713
                  </span>
                  <span class="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter-item text-center border p-5">
                <i class="fas fa-heart fa-4x text-white"></i>
                <h3 class="text-white my-4">Days of Help</h3>
                <div
                  class="counter-counting text-center border-white w-100"
                  style={{ borderStyle: " dotted;", fontSize: " 30px;" }}
                >
                  <span
                    class="text-primary fs-2 fw-bold"
                    data-toggle="counter-up"
                  >
                    487
                  </span>
                  <span class="h1 fw-bold text-primary">+</span>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-center">
                <a
                  class="btn-hover-bg btn btn-primary text-white py-2 px-4"
                  href="#"
                >
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container-fluid causes py-5">
        <div class="container py-5">
          <div class="text-center mx-auto pb-5" style={{ maxWidth: " 800px;" }}>
            <h5 class="text-uppercase text-primary">Recent Causes</h5>
            <h1 class="mb-4">The environment needs our protection</h1>
            <p class="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-6 col-xl-3">
              <div class="causes-item">
                <div class="causes-img">
                  <img
                    src="img/causes-4.jpg"
                    class="img-fluid w-100"
                    alt="Image"
                  />
                  <div class="causes-link pb-2 px-3">
                    <small class="text-white">
                      <i class="fas fa-chart-bar text-primary me-2"></i>Goal:
                      $3600
                    </small>
                    <small class="text-white">
                      <i class="fa fa-thumbs-up text-primary me-2"></i>Raised:
                      $4000
                    </small>
                  </div>
                  <div class="causes-dination p-2">
                    <a
                      class="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>65%</span>
                  </div>
                </div>
                <div class="causes-content p-4">
                  <h4 class="mb-3">First environments activity of</h4>
                  <p class="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    class="btn-hover-bg btn btn-primary text-white py-2 px-3"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="causes-item">
                <div class="causes-img">
                  <img
                    src="img/causes-2.jpg"
                    class="img-fluid w-100"
                    alt="Image"
                  />
                  <div class="causes-link pb-2 px-3">
                    <small class="text-white">
                      <i class="fas fa-chart-bar text-primary me-2"></i>Goal:
                      $3600
                    </small>
                    <small class="text-white">
                      <i class="fa fa-thumbs-up text-primary me-2"></i>Raised:
                      $4000
                    </small>
                  </div>
                  <div class="causes-dination p-2">
                    <a
                      class="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>75%</span>
                  </div>
                </div>
                <div class="causes-content p-4">
                  <h4 class="mb-3">Build school for poor children.</h4>
                  <p class="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    class="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="causes-item">
                <div class="causes-img">
                  <img
                    src="img/causes-3.jpg"
                    class="img-fluid w-100"
                    alt="Image"
                  />
                  <div class="causes-link pb-2 px-3">
                    <small class="text-white">
                      <i class="fas fa-chart-bar text-primary me-2"></i>Goal:
                      $3600
                    </small>
                    <small class="text-white">
                      <i class="fa fa-thumbs-up text-primary me-2"></i>Raised:
                      $4000
                    </small>
                  </div>
                  <div class="causes-dination p-2">
                    <a
                      class="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div class="causes-content p-4">
                  <h4 class="mb-3">
                    Building clean-water system for rural poor.
                  </h4>
                  <p class="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    class="btn-hover-bg btn btn-primary text-white py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-3">
              <div class="causes-item">
                <div class="causes-img">
                  <img
                    src="img/causes-1.jpg"
                    class="img-fluid w-100"
                    alt="Image"
                  />
                  <div class="causes-link pb-2 px-3">
                    <small class="text-white">
                      <i class="fas fa-chart-bar text-primary me-2"></i>Goal:
                      $3600
                    </small>
                    <small class="text-white">
                      <i class="fa fa-thumbs-up text-primary me-2"></i>Raised:
                      $4000
                    </small>
                  </div>
                  <div class="causes-dination p-2">
                    <a
                      class="btn-hover-bg btn btn-primary text-white py-2 px-3"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>95%</span>
                  </div>
                </div>
                <div class="causes-content p-4">
                  <h4 class="mb-3">
                    First environments activity of this summer.
                  </h4>
                  <p class="mb-4">
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <a
                    class="btn-hover-bg btn btn-primary text-white py-2 px-4"
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
    </>
  );
}
