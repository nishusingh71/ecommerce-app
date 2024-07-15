import React from "react";

export default function Donation() {
  return (
    <>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: " 900px;" }}>
          <h1 class="text-white display-3 mb-4">Donation</h1>
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
            <li class="breadcrumb-item active text-white">Donation</li>
          </ol>
        </div>
      </div>
      <div className="container-fluid donation py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: " 800px;" }}
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
    </>
  );
}
