import React from "react";

export default function Volunteers() {
  return (
    <>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: " 900px;" }}>
          <h1 class="text-white display-3 mb-4">Our Volunteers</h1>
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
            <li class="breadcrumb-item active text-white">Volunteers</li>
          </ol>
        </div>
      </div>
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
    </>
  );
}
